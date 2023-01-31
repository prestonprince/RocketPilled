from .db import db, environment, SCHEMA, add_prefix_for_prod


class Ticket(db.Model):
    __tablename__ = "tickets"

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    match_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('matches.id')), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    screenshot_link =  db.Column(db.String(255), nullable=False)
    description = db.Column(db.String(255))


    match = db.relationship("Match", back_populates='tickets')
    user = db.relationship("User", back_populates='tickets')

    
    def to_dict_base(self):
        return {
            'id': self.id,
            'screenshot_link': self.screenshot_link,
            'description': self.description
        }
    

    def to_dict(self):
        return {
            'id': self.id,
            'screenshot_link': self.screenshot_link,
            'description': self.description,
            'match': self.match.to_dict_base(),
            'user': self.user.to_dict_base() 
        }