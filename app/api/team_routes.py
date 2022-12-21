from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Team, db, User
from app.forms import CreateTeamForm
from .auth_routes import validation_errors_to_error_messages

team_routes = Blueprint('teams', __name__)


@team_routes.route('')
def all_teams():
    """
    Query for all teams and return a dictionary of teams divided by 
    solo, duo, and squad type
    """
    teams = Team.query.all()
    all_teams = {
        "solo": [team.to_dict() for team in teams if team.type == 'solo'],
        "duo": [team.to_dict() for team in teams if team.type == 'duo'],
        "squad": [team.to_dict() for team in teams if team.type == 'squad']
    }

    return {"teams": all_teams}


@team_routes.route('/<int:team_id>')
def team(team_id):
    """
    Query for a team by id and return that team in a dictionary
    """
    team = Team.query.get(team_id)
    return team.to_dict()


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

        new_team.members.append(user)
        db.session.commit()
        return new_team.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
