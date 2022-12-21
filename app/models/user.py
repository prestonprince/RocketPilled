from .db import db, environment, SCHEMA, add_prefix_for_prod
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin
from .team import team_members


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)
    xp_points = db.Column(db.Integer, default=0)

    teams = db.relationship("Team", secondary=team_members, back_populates="members")
    
    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict_base(self):
        return {
            "id": self.id,
            "username": self.username,
            "email": self.email,
            "xp_points": self.xp_points
        }

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            "xp_points": self.xp_points,
            "Solo": [team.to_dict() for team in self.teams if team.type == "Solo"],
            "Duo": [team.to_dict() for team in self.teams if team.type == "Duo"],
            "Squad": [team.to_dict() for team in self.teams if team.type == "Squad"]
        }
    
