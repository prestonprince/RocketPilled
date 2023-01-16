from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Team, db, User, MatchReport
from .auth_routes import validation_errors_to_error_messages, authorized
from app.forms import PostReportForm

match_report_routes = Blueprint('match_reports', __name__)

# check if match is completed, returns true if completed, returns false if disputed
def is_completed(match, report):
    prev_report = match.reports[0].to_dict()
    new_report = report.to_dict()
    return True if new_report['is_win'] is not prev_report['is_win'] else False

@match_report_routes('/<int:match_id>', methods=['POST'])
@login_required
def post_match_report(match_id):
    """
    Post a report to a specific match
    Query for match by match_id param and query for team by team_id in request body.
    If match and team exist, and user is authorized, post report
    """
    form = PostReportForm()
    data = form.data
    team = Team.query.get(data['team_id'])
    match = Match.query.get(data['match_id'])

    if not authorized(team.owner_id):
        return {'error', 'You do not own this team'}

    if form.validate_on_submit():
        # make new report and commit to db
        new_report = MatchReport(
            team_id = team.id,
            match_id = match.id,
            is_win = data['is_win']
        )
        db.session.add(new_report)
        db.session.commit()
        
        # check if match already has a report, if it does, update match to completed or disputed based on reports
        if len(match.reports) > 0:
            if is_completed(match, new_report):
                match.status = 'completed'
                db.session.commit()
                if new_report.is_win == True:
                    match.winning_team_id = team.id
                    db.session.commit()
                else:
                    prev_report = match.reports[0].to_dict()
                    match.winning_team_id = prev_report['team_id']
                    db.session.commit()
            else:
                match.status = 'disputed'
                db.session.commit()
            
