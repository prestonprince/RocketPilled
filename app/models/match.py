from .db import db, environment, SCHEMA, add_prefix_for_prod


class Match(db.Model):
    __tablename__ = 'matches'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    # status can be posted, pending, completed, or disputed
    status = db.Column(db.String(20), default="posted")
    # type can be 1v1, 2v2, or 3v3
    type = db.Column(db.String(5), nullable=False)
    map = db.Column(db.String(40))
    winning_team_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("teams.id")), default=None)

    teams = db.relationship("Team", back_populates="matches")
    reports = db.relationship("MatchReport", back_populates='match')

    @property
    def _status(self):
        return self.status

    @_status.setter
    def _status(seld, status):
        self.status = status

    def to_dict_base(self):
        return {
            "id": self.id,
            "status": self.status,
            "type": self.type,
            "winning_team_id": self.winning_team_id
        }
    
    def to_dict(self):
        return {
            "id": self.id,
            "status": self.status,
            "type": self.type,
            "winning_team_id": self.winning_team_id,
            "teams": [team.to_dict() for teams in self.teams],
            "reports": [report.to_dict_base() for report in self.reports]
        }