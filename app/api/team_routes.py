from flask import Blueprint
from flask_login import login_required, current_user
from app.models import Team

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
