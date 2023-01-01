from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import Team

def team_exists(form, field):
    # check if team exists
    id = field.data
    team = Team.query.get(id)

    if not team:
        raise ValidationError("Team not found")


class DeleteMatchForm(FlaskForm):
    team_id = IntegerField('team_id', validators=[DataRequired(), team_exists])
