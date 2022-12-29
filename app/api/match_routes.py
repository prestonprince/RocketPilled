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

    return {"matches": all_matches}


@match_routes.route('', methods=['POST'])
@login_required
def post_match():
    """
    Route that takes in type and team id and posts new match for that team
    """
    form = PostMatchForm()

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        map = random_map(MAPS)
        new_match = Match(type=form.data['type'], map=map)

        db.session.add(new_match)
        db.session.commit()

        team = Team.query.get(form.data['team_id'])
        new_match.teams.append(team)
        db.session.commit()

        return new_match.to_dict(), 201
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


@match_routes.route("/<int:match_id>", methods=['PUT'])
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
    match = Match.query.get(match_id)
    team = Team.query.get(data['team_id'])

    if team.type != match.type:
        return {'error': 'Team and match type must be the same'}

    if len(match.teams) > 1:
        return {'error': 'this match has already been accepted'}

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        status = data['status']

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
        return {'error': 'Match not found'}

    if match.status != 'posted':
        return {'error': 'Match cannot be cancelled once accepted'}

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if team not in match.teams:
            return {'error': "This team is unauthorized to cancel the match"}

        db.session.delete(match)
        db.session.commit()
        return {"message": "Successfully cancelled"}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 400
