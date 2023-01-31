from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Team, db, User, Ticket, Match
from .auth_routes import validation_errors_to_error_messages, authorized
from app.forms import PostTicketForm


ticket_routes = Blueprint('tickets', __name__)


@ticket_routes.route('/current')
def get_user_tickets():
    """
    Query for current user and return all of their tickets
    """
    user = User.query.get(current_user.id).to_dict()
    user_tickets = user['tickets']
    return {'tickets': user_tickets}


@ticket_routes.route('', methods=['POST'])
def post_ticket():
    """
    Create a new ticket
    """

    form = PostTicketForm()
    data = form.data
    user = User.query.get(data['user_id'])
    match = Match.query.get(data['match_id'])

    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_ticket = Ticket(
            match_id=data['match_id'],
            user_id=data['user_id'],
            screenshot_link=data['screenshot_link'],
            description=data['description']
        )
        db.session.add(new_ticket)
        db.session.commit()

        new_ticket.match = match 
        db.session.commit()

        new_ticket.user = user
        db.session.commit()
        return {new_ticket.to_dict()}
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
