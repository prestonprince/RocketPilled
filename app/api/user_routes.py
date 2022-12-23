from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import User

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
@login_required
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    user_info = user.to_dict()

    soloList = user_info['Solo']
    duoList = user_info['Duo']
    squadList = user_info['Squad']

    soloDict = {d['id']: d for d in soloList}
    duoDict = {d['id']: d for d in duoList}
    squadDict = {d['id']: d for d in squadList }


    return {**user_info, "Solo": soloDict, "Duo": duoDict, "Squad": squadDict}
