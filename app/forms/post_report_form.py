from flask_wtf import FlaskForm
from wtforms import IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import Team, Match

def team_exists(form, field):
    # check if team exists
    id = field.data
    team = Team.query.get(id)
    if not team:
        raise ValidationError('Team not found')


def match_exists(form, field):
    # check if match exists
    id = field.data
    match = Match.query.get(id)
    if not match:
        raise ValidationError('Match not found')


class PostReportForm(FlaskForm):
    team_id = IntegerField('team_id', validators=[DataRequired(), team_exists])
    match_id = IntegerField('match_id', validators=[DataRequired(), match_exists])
    is_win = BooleanField('is_win', validators=[DataRequired()])
