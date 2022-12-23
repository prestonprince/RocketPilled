from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Team, db, User
from app.forms import CreateTeamForm, AddTeamMemberForm, RemoveTeamMemberForm
from .auth_routes import validation_errors_to_error_messages, authorized

team_routes = Blueprint('teams', __name__)


@team_routes.route('')
def all_teams():
    """
    Query for all teams and return a dictionary of teams divided by 
    solo, duo, and squad type
    """
    teams = Team.query.all()
    all_teams = {
        "solo": [team.to_dict() for team in teams if team.type == 'Solo'],
        "duo": [team.to_dict() for team in teams if team.type == 'Duo'],
        "squad": [team.to_dict() for team in teams if team.type == 'Squad']
    }

    return {"teams": all_teams}


@team_routes.route('', methods=["POST"])
@login_required
def create_team():
    """
    Create a new team based on request body
    """
    form = CreateTeamForm()
    user = User.query.get(current_user.id)

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        data = form.data
        new_team = Team(
            owner_id=data['owner_id'],
            name=data['name'],
            type=data['type']
        )
        db.session.add(new_team)
        db.session.commit()

        new_team.members.append(user)
        db.session.commit()
        return new_team.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


def validate_team_member(team, user, user_info):
    if len(user_info[team.type]) > 0:
        return {'error': f"User is on another {team.type} team"}

    if user in team.members:
        return {"error": "User is already on this team"}
    
    if not team:
        return {'error': 'This team does not exist'}

    if not authorized(team.owner_id):
        return {'error': "You do not own this team"}


@team_routes.route('/<int:team_id>', methods=['POST'])
@login_required
def add_team_member(team_id):
    """
    Add user to team
    Query for team by team_id param and query for user by user_id in request body.
    If team and user exist, add user to team members
    """
    form = AddTeamMemberForm()

    team = Team.query.get(team_id)
    data = form.data
    user = User.query.get(data['user_id'])
    user_info = user.to_dict()

    validations = validate_team_member(team, user, user_info)
    if validations: return validations

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():

        team.members.append(user)
        db.session.commit()

        return team.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@team_routes.route('/<int:team_id>', methods=['PUT'])
@login_required
def remove_team_member(team_id):
    """
    Remove user from a team
    """

    form = RemoveTeamMemberForm()
    data = form.data

    team = Team.query.get(team_id)

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user = User.query.get(data['user_id'])
        # check to make sure user is on the team
        if user not in team.members:
            return {'error': 'User is not on this team'}
        
        team.members.remove(user)
        db.session.commit()
        return team.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@team_routes.route('/<int:team_id>', methods=['DELETE'])
@login_required
def delete_team(team_id):
    """
    Delete a team if authorized
    """
    team = Team.query.get(team_id)

    if not authorized(team.owner_id):
        return {"error": "You do not own this team"}
        
    db.session.delete(team)
    db.session.commit()
    
    return {"message": "Successfully deleted"}





        



    
