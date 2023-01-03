from app.models import db, User, Team, Match, environment, SCHEMA


# Adds a demo user, you can add other users here if you want
def seed_users():
    # seed users

    #1
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    #2
    squishy = User(
        username='Squishy', email='squishy@aa.io', password='password')
    #3
    garrett = User(
        username='GarrettG', email='garrett@aa.io', password='password')
    #4
    jstn = User(
        username='jstn', email='jstn@aa.io', password='password')

    #5
    sypical = User(
        username='Sypical', email='syp@aa.io', password='password')
    #6
    firstkiller = User(
        username='Firstkiller', email='fk@aa.io', password='password')
    #7
    mist = User(
        username='mist', email='mist@aa.io', password='password')

    #8
    daniel = User(
        username='daniel', email='daniel@aa.io', password='password')
    #9
    arsenal = User(
        username='Arsenal', email='arsenal@aa.io', password='password')
    #10
    lj = User(
        username='lj', email='lj@aa.io', password='password')

    #11
    appjack = User(
        username='ApparentlyJack', email='appjack@aa.io', password='password')
    #12
    noly = User(
        username='Noly', email='noly@aa.io', password='password')
    #13
    chronic = User(
        username='chronic', email='chronic@aa.io', password='password')

    #14
    ghostrider = User(
        username='GhostRider', email='ghostrider@aa.io', password='password')
    #15
    xXxKillerxXx = User(
        username='xXxKillerxXx', email='xxkillerxx@aa.io', password='password')
    #16
    pwnagequeen = User(
        username='PwnageQueen', email='pwnagequeen@aa.io', password='password')

    #17
    masterchief = User(
        username='MasterChief', email='masterchief@aa.io', password='password')
    #18
    shadowassassin = User(
        username='ShadowAssassin', email='shadowassassin@aa.io', password='password')
    #19
    firestarter = User(
        username='Firestarter', email='firestarter@aa.io', password='password')

    #20
    deathbringer = User(
        username='Deathbringer', email='deathbringer@aa.io', password='password')
    #21
    lightninglord = User(
        username='LightningLord', email='lightninglord@aa.io', password='password')
    #22
    thesilentninja = User(
        username='TheSilentNinja', email='thesilentninja@aa.io', password='password')

    #23
    icequeen = User(
        username='IceQueen', email='icequeen@aa.io', password='password')
    #24
    bloodmoon = User(
        username='Bloodmoon', email='bloodmoon@aa.io', password='password')
    #25
    darkknight = User(
        username='DarkKnight', email='darkknight@aa.io', password='password')

    #26
    stormbringer = User(
        username='Stormbringer', email='stormbringer@aa.io', password='password')
    #27
    dragonfire = User(
        username='Dragonfire', email='dragonfire@aa.io', password='password')
    #28
    warlord = User(
        username='Warlord', email='warlord@aa.io', password='password')

    #29
    demonhunter = User(
        username='DemonHunter', email='demonhunter@aa.io', password='password')
    #30
    shadowstrike = User(
        username='Shadowstrike', email='shadowstrike@aa.io', password='password')
    #31
    voidwalker = User(
        username='VoidWalker', email='voidwalker@aa.io', password='password')

    db.session.add_all([
        demo, squishy, garrett, jstn, sypical, firstkiller, mist, daniel, arsenal, lj, appjack, noly, chronic,
        ghostrider,
        xXxKillerxXx,
        pwnagequeen,
        masterchief,
        shadowassassin,
        firestarter,
        deathbringer,
        lightninglord,
        thesilentninja,
        icequeen,
        bloodmoon,
        darkknight,
        stormbringer,
        dragonfire,
        warlord,
        demonhunter,
        shadowstrike,
        voidwalker
    ])
    db.session.commit()

    # seed teams

    #squad
    nrg = Team(owner_id=3, name="NRG", type='Squad')
    faze = Team(owner_id=6, name="Faze", type='Squad')

    ssg = Team(owner_id=9, name="SSG", type='Squad')
    geng = Team(owner_id=11, name="GenG", type='Squad')

    marines = Team(owner_id=14, name="Marines", type='Squad')
    baroque = Team(owner_id=17, name="BaroqueWorks", type='Squad')

    strawhats = Team(owner_id=20, name="StrawHats", type='Squad')
    redhairs = Team(owner_id=23, name="RedHairs", type='Squad')

    #solos
    jacksolos = Team(owner_id=11, name="JackSolos", type='Solo')
    fksolo = Team(owner_id=6, name='FkSolos', type='Solo')

    squishysolos = Team(owner_id=2, name="SquishSolos", type='Solo')
    garrettsolo = Team(owner_id=3, name="GarrettGSolo", type='Solo')

    jstnSolos = Team(owner_id=4, name="JstnSolos", type='Solo')
    sypSolos = Team(owner_id=5, name="SypSolos", type='Solo')

    mistSolos = Team(owner_id=7, name="MistSolos", type='Solo')
    danSolo = Team(owner_id=8, name="DanSolos", type='Solo')

    arseSolos = Team(owner_id=9, name="ArsySolos", type='Solo')
    ljSolos = Team(owner_id=10, name="LJSolos", type='Solo')
    
    nolySolo = Team(owner_id=12, name="NolySolo", type='Solo')
    chronicSolo = Team(owner_id=13, name="ChronSolo", type='Solo')

    ghostSolo = Team(owner_id=14, name="GhostSolos", type='Solo')
    killSolo = Team(owner_id=15, name="xKillERxSolo", type='Solo')

    pwnSolo = Team(owner_id=16, name="PwnageSolos", type='Solo')
    masterSolo = Team(owner_id=17, name="MasterChiefSolos", type='Solo')

    #duo teams
    arsybaby = Team(owner_id=9, name='ArsyBabies', type='Duo')
    theduo = Team(owner_id=10, name='TheDuo', type='Duo')

    squishyG = Team(owner_id=2, name='SqushyG', type='Duo')
    gboyz = Team(owner_id=11, name='GBoyz', type='Duo')

    ghostkiller = Team(owner_id=14, name='GhostKillerz', type='Duo')
    chiefAssassin = Team(owner_id=17, name='chiefassassinz', type='Duo')

    db.session.add_all([
        nrg, 
        faze,
        jacksolos,
        fksolo, 
        arsybaby, 
        theduo,
        ssg,
        geng,
        marines,
        baroque,
        strawhats,
        redhairs,
        squishysolos,
        garrettsolo,
        jstnSolos,
        sypSolos,
        mistSolos,
        danSolo,
        arseSolos,
        ljSolos,
        nolySolo,
        chronicSolo,
        ghostSolo,
        killSolo,
        pwnSolo,
        masterSolo,
        squishyG,
        gboyz,
        ghostkiller,
        chiefAssassin
    ])
    db.session.commit()

    nrg.members.append(squishy)
    nrg.members.append(garrett)
    nrg.members.append(jstn)

    faze.members.append(firstkiller)
    faze.members.append(mist)
    faze.members.append(sypical)

    ssg.members.append(arsenal)
    ssg.members.append(daniel)
    ssg.members.append(lj)

    geng.members.append(appjack)
    geng.members.append(chronic)
    geng.members.append(noly)

    marines.members.append(ghostrider)
    marines.members.append(xXxKillerxXx)
    marines.members.append(pwnagequeen)

    baroque.members.append(masterchief)
    baroque.members.append(shadowassassin)
    baroque.members.append(firestarter)

    strawhats.members.append(deathbringer)
    strawhats.members.append(lightninglord)
    strawhats.members.append(thesilentninja)

    redhairs.members.append(icequeen)
    redhairs.members.append(bloodmoon)
    redhairs.members.append(darkknight)


    jacksolos.members.append(appjack)
    fksolo.members.append(firstkiller)
    squishysolos.members.append(squishy)
    garrettsolo.members.append(garrett)
    jstnSolos.members.append(jstn)
    sypSolos.members.append(sypical)
    mistSolos.members.append(mist)
    danSolo.members.append(daniel)
    arseSolos.members.append(arsenal)
    ljSolos.members.append(lj)
    nolySolo.members.append(noly)
    chronicSolo.members.append(chronic)
    ghostSolo.members.append(ghostrider)
    killSolo.members.append(xXxKillerxXx)
    pwnSolo.members.append(pwnagequeen)
    masterSolo.members.append(masterchief)


    arsybaby.members.append(arsenal)
    arsybaby.members.append(daniel)

    theduo.members.append(lj)
    theduo.members.append(chronic)

    squishyG.members.append(squishy)
    squishyG.members.append(garrett)

    gboyz.members.append(appjack)
    gboyz.members.append(noly)

    ghostkiller.members.append(ghostrider)
    ghostkiller.members.append(xXxKillerxXx)

    chiefAssassin.members.append(masterchief)
    chiefAssassin.members.append(shadowassassin)


    db.session.commit()

    # seed matches

    #squad matches
    match1 = Match(status='posted', type='Squad', map='Champions Field')
    match2 = Match(status='posted', type='Squad', map='Urban Central')
    match3 = Match(status='posted', type='Squad', map='DFH Stadium')
    match4 = Match(status='posted', type='Squad', map='Mannfield')

    # duo matches
    match5 = Match(status='posted', type='Duo', map='Mannfield')
    match6 = Match(status='posted', type='Duo', map='AquaDome')
    match7 = Match(status='posted', type='Duo', map='Neon Fields')

    # solo matches 
    match8 = Match(status='posted', type='Solo', map='Wasteland')
    match9 = Match(status='posted', type='Solo', map='Neon Fields')
    match10 = Match(status='posted', type='Solo', map='Deadeye Canyon')
    match11 = Match(status='posted', type='Solo', map='Sovereign Heights')
    match12 = Match(status='posted', type='Solo', map='Salty Shores')
    match13 = Match(status='posted', type='Solo', map='Farmstead')
    match14 = Match(status='posted', type='Solo', map='Champions Field')
    match15 = Match(status='posted', type='Solo', map='Utopia Coliseum')


    db.session.add_all([
        match1, 
        match2, 
        match3, 
        match4,
        match5,
        match6,
        match7,
        match8,
        match9,
        match10,
        match11,
        match12,
        match13,
        match14,
        match15
    ])
    db.session.commit()


    match1.teams.append(faze)
    match2.teams.append(ssg)
    match3.teams.append(baroque)
    match4.teams.append(strawhats)

    match5.teams.append(arsybaby)
    match6.teams.append(squishyG)
    match7.teams.append(ghostkiller)

    match8.teams.append(jacksolos)
    match9.teams.append(squishysolos)
    match10.teams.append(jstnSolos)
    match11.teams.append(mistSolos)
    match12.teams.append(arseSolos)
    match13.teams.append(nolySolo)
    match14.teams.append(ghostSolo)
    match15.teams.append(pwnSolo)


    db.session.commit()
    print("DONE SEEDING")


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
