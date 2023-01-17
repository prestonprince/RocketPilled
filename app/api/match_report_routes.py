from flask import Blueprint, request
from flask_login import login_required, current_user
from app.models import Team, db, User, MatchReport, Match
from .auth_routes import validation_errors_to_error_messages, authorized
from app.forms import PostReportForm

match_report_routes = Blueprint('match_reports', __name__)

# check if match is completed, returns true if completed, returns false if disputed
def is_completed(prev_report, new_report):
    if prev_report['is_win'] != new_report['is_win']:
        return True
    else:
        return False

@match_report_routes.route('', methods=['POST'])
@login_required
def post_match_report():
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
        return {'error', 'You do not own this team'}, 401

    form['csrf_token'].data = request.cookies['csrf_token']
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
        if len(match.reports) > 1:
            prev_report = list(filter(lambda x: x.team_id != team.id, match.reports))[0].to_dict()
            report = new_report.to_dict()
            if is_completed(prev_report, report):
                match.status = 'completed'
                db.session.commit()

                # check if new report is win, if it is, set winning_team_id of match to the team id that is posting the report, else
                # grab the team id from the previous report, and set the match winning_team_id to that id
                if report['is_win'] == True:
                    match.winning_team_id = team.id
                    db.session.commit()
                else:
                    match.winning_team_id = prev_report['team_id']
                    db.session.commit()
            else:
                match.status = 'disputed'
                db.session.commit()
        
        return match.to_dict()
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401
                
