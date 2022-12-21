from flask_wtf import FlaskForm
from wtforms import IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import User, Team


def user_exists(form, field):
    # check if team exists
    id = field.data
    user = User.query.get(id)
    if not user:
        raise ValidationError('User not found')


class AddTeamMemberForm(FlaskForm):
    user_id = IntegerField('user_id', validators=[DataRequired(), user_exists])
    
