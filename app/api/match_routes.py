from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import db, Team, User, Match
from .auth_routes import validation_errors_to_error_messages, authorized

match_routes = Blueprint('matches', __name__)


