from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Team, User, Match
from .auth_routes import validation_errors_to_error_messages, authorized
from ..utils.match_utils import random_map, MAPS
from app.forms import PostMatchForm, DeleteMatchForm, UpdateMatchStatusForm


match_routes = Blueprint('matches', __name__)


@match_routes.route('')
def all_matches():
    """
    Query for all matches and return them as a dictionary 
    """
    matches = Match.query.all()
    all_matches = [match.to_dict() for match in matches]

    solo_matches = [match for match in all_matches if match['type'] == 'Solo']
    duo_matches = [match for match in all_matches if match['type'] == 'Duo']
    squad_matches = [match for match in all_matches if match['type'] == 'Squad']

    return {"Solo": solo_matches, "Duo": duo_matches, "Squad": squad_matches}


@match_routes.route('', methods=['POST'])
@login_required
def post_match():
    """
    Route that takes in type and team id and posts new match for that team
    """
    form = PostMatchForm()
    data = form.data
    user_id = current_user.id
    team = Team.query.get(data['team_id'])

    if user_id != team.owner_id:
        return {"errors": ['You do not own this team']}, 401

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        map = random_map(MAPS)
        new_match = Match(type=data['type'], map=map)

        db.session.add(new_match)
        db.session.commit()

        new_match.teams.append(team)
        db.session.commit()

        return new_match.to_dict(), 201
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@match_routes.route("/<int:match_id>", methods=['PUT'])
@login_required
def update_status(match_id):
    """
    update match status with status update in the request body
    req body takes:
        team id that is updating the match
        status string
    """
    #! will only update from posted to pending until 3rd feature is implemented
    form = UpdateMatchStatusForm()
    data = form.data
    user_id = current_user.id
    match = Match.query.get(match_id)
    team = Team.query.get(data['team_id'])

    if team.type != match.type:
        return {'error': 'Team and match type must be the same'}, 401

    if user_id != team.owner_id:
        return {'error': f'You do not own the {team.name} team'},403

    if len(match.teams) > 1:
        return {'error': 'this match has already been accepted'}, 401

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        status = data['status']

        if status == 'pending':
            match.status = status
            match.teams.append(team)
            db.session.commit()


        return match.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400


@match_routes.route("/<int:match_id>", methods=['DELETE'])
def cancel_match(match_id):
    """
    Query for match by match id and delete it only if status is 'posted'
    """
    form = DeleteMatchForm()
    data = form.data

    match = Match.query.get(match_id)
    team = Team.query.get(data['team_id'])

    if not authorized(team.owner_id):
        return {'error', 'You are not authorized to perform this action'}, 403

    if not match:
        return {'error': 'Match not found'}, 400

    if match.status != 'posted':
        return {'error': 'Match cannot be cancelled once accepted'}, 400

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if team not in match.teams:
            return {'error': "This team is unauthorized to cancel the match"}, 403

        db.session.delete(match)
        db.session.commit()
        return {"message": "Successfully cancelled"}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
