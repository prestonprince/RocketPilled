from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import Team

def team_exists(form, field): 
    # check if team exists
    id = field.data
    team = Team.query.get(id)
    if not team: 
        raise ValidationError('Team not found')
        

def status_check(form, field):
    # check if provided status is posted, pending, completed, or disputed
    STATUS = ['posted', 'pending', 'completed', 'disputed']
    status = field.data
    if status not in STATUS:
        raise ValidationError('New status must be posted, pending, completed, or disputed')


class UpdateMatchStatusForm(FlaskForm):
    team_id = IntegerField('team_id', validators=[DataRequired(), team_exists])
    status = StringField('status', validators=[DataRequired(), status_check])
