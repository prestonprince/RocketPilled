from app.models import db, User, Team, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    # seed users
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    squishy = User(
        username='Squishy', email='squishy@aa.io', password='password')
    garrett = User(
        username='GarrettG', email='garrett@aa.io', password='password')
    jstn = User(
        username='jstn', email='jstn@aa.io', password='password')
    sypical = User(
        username='Sypical', email='syp@aa.io', password='password')
    firstkiller = User(
        username='Firstkiller', email='fk@aa.io', password='password')
    mist = User(
        username='mist', email='mist@aa.io', password='password')
    daniel = User(
        username='daniel', email='daniel@aa.io', password='password')
    arsenal = User(
        username='Arsenal', email='arsenal@aa.io', password='password')
    lj = User(
        username='lj', email='lj@aa.io', password='password')
    appjack = User(
        username='ApparentlyJack', email='appjack@aa.io', password='password')
    noly = User(
        username='Noly', email='noly@aa.io', password='password')
    chronic = User(
        username='chronic', email='chronic@aa.io', password='password')

    db.session.add_all([
        demo, squishy, garrett, jstn, sypical, firstkiller, mist, daniel, arsenal, lj, appjack, noly, chronic
    ])
    db.session.commit()

    # seed teams
    nrg = Team(owner_id=3, name="NRG", type='squad')
    faze = Team(owner_id=6, name="FaZe", type='squad')
    jacksolos = Team(owner_id=11, name="JackSolos", type='solo')
    fksolo = Team(owner_id=6, name='FkSolos', type='solo')
    arsybaby = Team(owner_id=9, name='ArsyBabies', type='duo')
    theduo = Team(owner_id=10, name='TheDuo', type='duo')

    db.session.add_all([nrg, faze, jacksolos, fksolo, arsybaby, theduo])
    db.session.commit()

    nrg.members.append(squishy)
    nrg.members.append(garrett)
    nrg.members.append(jstn)

    faze.members.append(firstkiller)
    faze.members.append(mist)
    faze.members.append(sypical)

    jacksolos.members.append(appjack)
    fksolo.members.append(firstkiller)

    arsybaby.members.append(arsenal)
    arsybaby.members.append(daniel)

    theduo.members.append(lj)
    theduo.members.append(chronic)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.team_members RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.teams RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM team_members")
        db.session.execute("DELETE FROM teams")
        db.session.execute("DELETE FROM users")

    db.session.commit()
