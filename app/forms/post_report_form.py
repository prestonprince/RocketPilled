from flask_wtf import FlaskForm
from wtforms import IntegerField, BooleanField
from wtforms.validators import DataRequired, ValidationError
from app.models import Team, Match

def match_reported(form, field):
    # check if match has been reported by both teams
    id = field.data
    match = Match.query.get(id)
    if len(match.reports) >= 2:
        raise ValidationError('Cannot report a completed or disputed match')

def team_reported(form, field):
    # check if team has reported this match already
    id = field.data
    match = Match.query.get(form.data['match_id'])
    if len(match.reports) > 0:
        report = match.reports[0].to_dict()
        if id == report['team_id']:
            raise ValidationError('You cannot report the same match twice')


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
    team_id = IntegerField('team_id', validators=[DataRequired(), team_exists, team_reported])
    match_id = IntegerField('match_id', validators=[DataRequired(), match_exists, match_reported])
    is_win = BooleanField('is_win')
