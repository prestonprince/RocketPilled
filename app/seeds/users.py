from app.models import db, User, Team, Match, environment, SCHEMA


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
    nrg = Team(owner_id=3, name="NRG", type='Squad')
    faze = Team(owner_id=6, name="FaZe", type='Squad')
    jacksolos = Team(owner_id=11, name="JackSolos", type='Solo')
    fksolo = Team(owner_id=6, name='FkSolos', type='Solo')
    arsybaby = Team(owner_id=9, name='ArsyBabies', type='Duo')
    theduo = Team(owner_id=10, name='TheDuo', type='Duo')

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

    # seed matches
    match1 = Match(type='Squad', map='Champions Field')
    match2 = Match(type='Duo', map='Neo Tokyo')
    match3 = Match(type='Solo', map='Urban Central')

    db.session.add_all([match1, match2, match3])
    db.session.commit()


    match1.teams.append(faze)
    match1.teams.append(nrg)

    match2.teams.append(arsybaby)
    match2.teams.append(theduo)

    match3.teams.append(fksolo)
    match3.teams.append(jacksolos)

    db.session.commit()
    print("HELLOOOOO",match1.teams)
    print("HELLOOOOO",match2.teams)
    print("HELLOOOOO",match3.teams)
    print("DONE SEEDING")

    # faze.matches.append(match1)
    # nrg.matches.append(match1)

    # theduo.matches.append(match2)
    # arsybaby.matches.append(match2)
    
    # fksolo.matches.append(match3)
    # jacksolos.matches.append(match3)

    # db.session.commit()
    # print(nrg.matches)
    # print(faze.matches)

# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.matches RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.team_members RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.teams RESTART IDENTITY CASCADE;")
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute("DELETE FROM matches")
        db.session.execute("DELETE FROM team_members")
        db.session.execute("DELETE FROM teams")
        db.session.execute("DELETE FROM users")

    db.session.commit()
