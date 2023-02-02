from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Match, User


def user_exists(form, field):
    # check if user exists
    id = field.data
    user = User.query.get(id)

    if not user:
        raise ValidationError('User not found')


def match_exists(form, field):
    # check if match exists
    id = field.data
    match = Match.query.get(id)

    if not match:
        raise ValidationError('Match not found')


class PostTicketForm(FlaskForm):
    match_id = IntegerField('match_id', validators=[DataRequired(), match_exists])
    user_id = IntegerField('user_id', validators=[DataRequired(), user_exists])
    screenshot_link = StringField('screenshot_link', validators=[DataRequired()])
    description = StringField('description', validators=[DataRequired()])
