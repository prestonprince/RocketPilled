from .db import db, environment, SCHEMA, add_prefix_for_prod


class MatchReport(db.Model):
    __tablename__ = "match_reports"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    team_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("teams.id")), nullable=False)
    match_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("matches.id")), nullable=False)
    is_win = db.Column(db.Boolean)
    
    match = db.relationship("Match", back_populates="reports")

    def to_dict_base(self):
        return {
            "id": self.id,
            "team_id": self.team_id,
            "match_id": self.match_id,
            "is_win": self.is_win
        }

    def to_dict(self):
        return {
            "id": self.id,
            "team_id": self.team_id,
            "match_id": self.match_id,
            "is_win": self.is_win,
            "team": self.team.to_dict(),
            "match": self.match.to_dict()
        }
