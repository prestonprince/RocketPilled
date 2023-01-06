from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import User, Team


def user_exists(form, field):
    # check is user exists
    id = field.data
    user = User.query.get(id)
    if not user:
        raise ValidationError('User not found')


def user_has_team(form, field):
    id = field.data
    type = form.data['type']
    user = User.query.get(id)
    user_info = user.to_dict()
    if len(user_info[type]) > 0:
        raise ValidationError(f'User is already on a {type} team')

    

def name_check(form, field):
    # check if name is taken
    name = field.data

    if len(name) > 25:
        raise ValidationError("Name must be 25 characters or less")

    team = Team.query.filter(Team.name == name).first()
    
    if team: 
        raise ValidationError("Team name has been taken")


types = ['Solo', 'Duo', 'Squad']


class CreateTeamForm(FlaskForm):
    owner_id = IntegerField('owner_id', validators=[DataRequired(), user_exists, user_has_team])
    name = StringField('Name', validators=[DataRequired(), name_check])
    type = SelectField('Type', choices=types)
