from .db import db, environment, SCHEMA, add_prefix_for_prod

team_matches = db.Table(
    'team_matches',
    db.Model.metadata,
    db.Column(
        'match_id',
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("matches.id")),
        primary_key=True
    ),
    db.Column(
        "team_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("teams.id")),
        primary_key=True
    )
)

if environment == "production":
    team_matches.schema = SCHEMA


class Match(db.Model):
    __tablename__ = 'matches'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    # status can be posted, pending, completed, or disputed
    status = db.Column(db.String(20), default="posted")
    # type can be Solo, Duo, or Squad
    type = db.Column(db.String(5), nullable=False)
    map = db.Column(db.String(40))
    winning_team_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("teams.id")), default=None)

    teams = db.relationship("Team", secondary=team_matches, back_populates="matches")
    reports = db.relationship("MatchReport", back_populates='match', cascade='all, delete')

    @property
    def _status(self):
        return self.status

    @_status.setter
    def _status(self, status):
        self.status = status

    @property
    def _winning_team_id(self):
        return self.winning_team_id
    
    @_winning_team_id.setter
    def _winning_team_id(self, winning_team_id):
        self.winning_team_id = winning_team_id

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
            "map": self.map,
            "teams": [team.to_dict() for team in self.teams],
            "reports": [report.to_dict_base() for report in self.reports]
        }
