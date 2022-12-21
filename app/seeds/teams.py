# from app.models import db, User, Team, environment, SCHEMA


# # Adds a team, you can add other users here if you want
# def seed_teams():

#     # seed teams
#     nrg = Team(owner_id=3, name="NRG", type='squad')
#     faze = Team(owner_id=6, name="FaZe", type='squad')
#     jacksolos = Team(owner_id=11, name="JackSolos", type='solo')
#     fksolo = Team(owner_id=6, name='FkSolos', type='solo')
#     arsybaby = Team(owner_id=9, name='ArsyBabies', type='duo')
#     theduo = Team(owner_id=10, name='TheDuo', type='duo')

#     db.session.add_all([nrg, faze, jacksolos, fksolo, arsybaby, theduo])
#     db.session.commit()


# # Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# # have a built in function to do this. With postgres in production TRUNCATE
# # removes all the data from the table, and RESET IDENTITY resets the auto
# # incrementing primary key, CASCADE deletes any dependent entities.  With
# # sqlite3 in development you need to instead use DELETE to remove all data and
# # it will reset the primary keys for you as well.
# def undo_teams():
#     if environment == "production":
#         db.session.execute(f"TRUNCATE table {SCHEMA}.teams RESTART IDENTITY CASCADE;")
#     else:
#         db.session.execute("DELETE FROM teams")

#     db.session.commit()
