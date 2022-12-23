from .db import db, environment, SCHEMA, add_prefix_for_prod
from .match import team_matches


team_members = db.Table(
    'team_members',
    db.Model.metadata,
    db.Column(
        "user_id",
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
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
    team_members.schema = SCHEMA


class Team(db.Model):
    __tablename__ = 'teams'

    if environment == 'production':
        __table_args__ = {'schema': SCHEMA}
    
    id = db.Column(db.Integer, primary_key=True)
    owner_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False)
    name = db.Column(db.String(40), nullable=False, unique=True)
    # type can be solo, duo, or squad
    type = db.Column(db.String(5), nullable=False)
    xp_points = db.Column(db.Integer, default=0)

    members = db.relationship("User", secondary=team_members, back_populates="teams")
    matches = db.relationship("Match", cascade='all, delete', secondary=team_matches, back_populates='teams')

    @property
    def _name(self):
        return self.name

    @_name.setter
    def _name(self, name):
        self.name = name
    
    def to_dict(self): 
        return {
            "id": self.id,
            "owner_id": self.owner_id,
            "name": self.name,
            "type": self.type,
            "xp_points": self.xp_points,
            "members": [member.to_dict_base() for member in self.members],
            "matches": [match.to_dict_base() for match in self.matches]
        }
