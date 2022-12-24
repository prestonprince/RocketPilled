from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Team, User, Match
from .auth_routes import validation_errors_to_error_messages, authorized
from ..utils.match_utils import random_map
from app.forms import PostMatchForm


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
        new_match = Match(form['type'])

        db.session.add(new_match)
        db.session.commit()

        team = Team.query.get(form['team_id'])
        new_match.teams.append(team)
        db.session.commit()

        return new_match.to_dict(), 201
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
