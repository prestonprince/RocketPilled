from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SelectField
from wtforms.validators import DataRequired, ValidationError
from app.models import User, Team, Match

def team_exists(form, field):
    # check is user exists
    id = field.data
    team = Team.query.get(id)
    if not team:
        raise ValidationError('Team not found')


def has_team_posted(form, field):
    # check if team has a posted match already
    id = field.data
    team = Team.query.get(id).to_dict()
    team_matches = team['matches']

    for match in team_matches:
        if match['status'] == 'posted': 
            raise ValidationError("Sorry, this team has posted a match already. Please wait for the match to be accepted or cancel it.")


def team_members_check(form, field): 
    id = field.data
    team = Team.query.get(id)

    if (team.type == 'Duo' and len(team.members) < 2) or (team.type == 'Squad' and len(team.members) < 3):
        raise ValidationError('Cannot post match without a full roster')


types = ['Solo', 'Duo', 'Squad']


class PostMatchForm(FlaskForm):
    type = SelectField('Type', choices=types)
    team_id = IntegerField('team_id', validators=[DataRequired(), has_team_posted, team_exists, team_members_check])
