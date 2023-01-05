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
    ssg = Team(owner_id=9, name="SSG", type='Squad', xp_points=1) #3
    redhairs = Team(owner_id=23, name="RedHairs", type='Squad')#8

    nrg = Team(owner_id=3, name="NRG", type='Squad') #1 
    baroque = Team(owner_id=17, name="BaroqueWorks", type='Squad')#6 

    marines = Team(owner_id=14, name="Marines", type='Squad')#5
    geng = Team(owner_id=11, name="GenG", type='Squad') #4

    faze = Team(owner_id=6, name="Faze", type='Squad') #2
    strawhats = Team(owner_id=20, name="StrawHats", type='Squad')#7

    #solos
    fksolo = Team(owner_id=6, name='FkSolos', type='Solo')#10
    garrettsolo = Team(owner_id=3, name="GarrettGSolo", type='Solo')#12

    squishysolos = Team(owner_id=2, name="SquishSolos", type='Solo')#11
    jacksolos = Team(owner_id=11, name="JackSolos", type='Solo')#9

    jstnSolos = Team(owner_id=4, name="JstnSolos", type='Solo')#13
    mistSolos = Team(owner_id=7, name="MistSolos", type='Solo')#15

    sypSolos = Team(owner_id=5, name="SypSolos", type='Solo')#14
    danSolo = Team(owner_id=8, name="DanSolos", type='Solo')#16

    ljSolos = Team(owner_id=10, name="LJSolos", type='Solo')#18
    nolySolo = Team(owner_id=12, name="NolySolo", type='Solo')#19
    
    arseSolos = Team(owner_id=9, name="ArsySolos", type='Solo')#17
    chronicSolo = Team(owner_id=13, name="ChronSolo", type='Solo')#20

    ghostSolo = Team(owner_id=14, name="GhostSolos", type='Solo')#21
    masterSolo = Team(owner_id=17, name="MasterChiefSolos", type='Solo')#24

    killSolo = Team(owner_id=15, name="xKillERxSolo", type='Solo')#22
    pwnSolo = Team(owner_id=16, name="PwnageSolos", type='Solo')#23

    #duo teams
    arsybaby = Team(owner_id=9, name='ArsyBabies', type='Duo')#25
    gboyz = Team(owner_id=11, name='GBoyz', type='Duo')#28

    squishyG = Team(owner_id=2, name='SqushyG', type='Duo')#27
    ghostkiller = Team(owner_id=14, name='GhostKillerz', type='Duo')#29

    theduo = Team(owner_id=10, name='TheDuo', type='Duo')#26
    chiefAssassin = Team(owner_id=17, name='chiefassassinz', type='Duo')#30

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

    # seed posted matches

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

    
    # seed completed matches
    
    # squad matches  
    # nrg v faze
    match16 = Match(status='completed', type='Squad', map='Wasteland', winning_team_id=2)

    # ssg v geng
    match17 = Match(status='completed', type='Squad', map='Utopia Coliseum', winning_team_id=8)

    # marines v baroque
    match18 = Match(status='completed', type='Squad', map='Mannfield', winning_team_id=10)

    # strawhats v redhairs
    match19 = Match(status='completed', type='Squad', map='Champions Field', winning_team_id=12)

    # jacksolos v fksolo
    match20 = Match(status='completed', type='Solo', map='Wasteland', winning_team_id=4)

    # squishy v garrett 
    match21 = Match(status='completed', type='Solo', map='Salty Shores', winning_team_id=13)

    #jstn v syp
    match22 = Match(status='completed', type='Solo', map='DFH Stadium', winning_team_id=15)

    # mist v dan 
    match23 = Match(status='completed', type='Solo', map='DFH Stadium', winning_team_id=18)

    # arsenal v lj 
    match24 = Match(status='completed', type='Solo', map='Neon Fields', winning_team_id=20)

    # noly v chronic 
    match25 = Match(status='completed', type='Solo', map='Deadeye Canyon', winning_team_id=22)

    # ghost v kill
    match26 = Match(status='completed', type='Solo', map='Neo Tokyo', winning_team_id=24)

    #pwn v masterchief
    match27 = Match(status='completed', type='Solo', map='Forbidden Temple', winning_team_id=26)

    # arsybaby v theduo
    match28 = Match(status='completed', type='Duo', map='AquaDome', winning_team_id=6)

    # squisyG v gboyz
    match29 = Match(status='completed', type='Duo', map='Sovereign Heights', winning_team_id=27)

    # ghostkiller v chief assassin
    match30 = Match(status='completed', type='Duo', map='Farmstead', winning_team_id=30)

    # ssg v faze
    match31 = Match(status='completed', type='Squad', map='Neon Fields', winning_team_id=7)

    # nrg v geng
    match32 = Match(status='completed', type='Squad', map='Farmstead', winning_team_id=1)

    # marines v redhairs
    match33 = Match(status='completed', type='Squad', map='AquaDome', winning_team_id=12)

    # strawhats v baroque
    match34 = Match(status='completed', type='Squad', map='Wasteland', winning_team_id=11)

    # fksolos v garrettsolo
    match35 = Match(status='completed', type='Solo', map='Salty Shores', winning_team_id=4)

    # squishySolo v jacksolos
    match36 = Match(status='completed', type='Solo', map='Deadeye Canyon', winning_team_id=3)

    # jsntsolos v mistsolo
    match37 = Match(status='completed', type='Solo', map='Neo Tokyo', winning_team_id=17)

    # sypSolo v dansolo
    match38 = Match(status='completed', type='Solo', map='Sovereign Heights', winning_team_id=18)

    # ljsolo v nolysolo
    match39 = Match(status='completed', type='Solo', map='Farmstead', winning_team_id=20)

    # arseSolo v chronicsolo
    match40 = Match(status='completed', type='Solo', map='Utopia Coliseum', winning_team_id=19)

    # ghostSolo v masterSolo
    match41 = Match(status='completed', type='Solo', map='Mannfield', winning_team_id=23)

    # killsolo v pwnsolo
    match42 = Match(status='completed', type='Solo', map='Urban Central', winning_team_id=25)

    #arsybaby v squishyg
    match43 = Match(status='completed', type='Duo', map='Champions Field', winning_team_id=27)

    #theduo v ghostkiller
    match44 = Match(status='completed', type='Duo', map='DFH Stadium', winning_team_id=6)

    #gboyz v chiefAssassin
    match45 = Match(status='completed', type='Duo', map='Champions Field', winning_team_id=28)

    #redhairs v ssg
    match46 = Match(status='completed', type='Squad', map='Neo Tokyo', winning_team_id=7)

    #nrg v baroque
    match47 = Match(status='completed', type='Squad', map='Wasteland', winning_team_id=1)

    #marines v geng
    match48 = Match(status='completed', type='Squad', map='Neon Fields', winning_team_id=8)

    #faze v strawhats
    match49 = Match(status='completed', type='Squad', map='Sovereign Heights', winning_team_id=2)

    #arsybaby v gboyz
    match50 = Match(status='completed', type='Duo', map='Deadeye Canyon', winning_team_id=28)

    #squshyG v ghostkiller
    match51 = Match(status='completed', type='Duo', map='Deadeye Canyon', winning_team_id=29)

    #theduo v chiefAssassin
    match52 = Match(status='completed', type='Duo', map='Urban Central', winning_team_id=6)


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
        match15,
        match16,
        match17,
        match18,
        match19,
        match20,
        match21,
        match22,
        match23,
        match24,
        match25,
        match26,
        match27,
        match28,
        match29,
        match30,
        match31,
        match32,
        match33,
        match34,
        match35,
        match36,
        match37,
        match38,
        match39,
        match40,
        match41,
        match42,
        match43,
        match44,
        match45,
        match46,
        match47,
        match48,
        match49,
        match50,
        match51,
        match52
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

    match16.teams.append(faze)
    match16.teams.append(nrg)

    match17.teams.append(ssg)
    match17.teams.append(geng)

    match18.teams.append(marines)
    match18.teams.append(baroque)

    match19.teams.append(strawhats)
    match19.teams.append(redhairs)

    match20.teams.append(jacksolos)
    match20.teams.append(fksolo)

    match21.teams.append(squishysolos)
    match21.teams.append(garrettsolo)

    match22.teams.append(jstnSolos)
    match22.teams.append(sypSolos)

    match23.teams.append(mistSolos)
    match23.teams.append(danSolo)

    match24.teams.append(arseSolos)
    match24.teams.append(ljSolos)

    match25.teams.append(nolySolo)
    match25.teams.append(chronicSolo)
    
    match26.teams.append(ghostSolo)
    match26.teams.append(killSolo)

    match27.teams.append(pwnSolo)
    match27.teams.append(masterSolo)

    match28.teams.append(arsybaby)
    match28.teams.append(theduo)
    
    match29.teams.append(squishyG)
    match29.teams.append(gboyz)

    match30.teams.append(ghostkiller)
    match30.teams.append(chiefAssassin)

    match31.teams.append(ssg)
    match31.teams.append(faze)

    match32.teams.append(geng)
    match32.teams.append(nrg)

    match33.teams.append(redhairs)
    match33.teams.append(marines)

    match34.teams.append(strawhats)
    match34.teams.append(baroque)

    match35.teams.append(fksolo)
    match35.teams.append(garrettsolo)

    match36.teams.append(squishysolos)
    match36.teams.append(jacksolos)

    match37.teams.append(jstnSolos)
    match37.teams.append(mistSolos)

    match38.teams.append(sypSolos)
    match38.teams.append(danSolo)

    match39.teams.append(ljSolos)
    match39.teams.append(nolySolo)

    match40.teams.append(chronicSolo)
    match40.teams.append(arseSolos)

    match41.teams.append(masterSolo)
    match41.teams.append(ghostSolo)

    match42.teams.append(pwnSolo)
    match42.teams.append(killSolo)

    match43.teams.append(arsybaby)
    match43.teams.append(squishyG)

    match44.teams.append(theduo)
    match44.teams.append(ghostkiller)

    match45.teams.append(gboyz)
    match45.teams.append(chiefAssassin)

    match46.teams.append(ssg)
    match46.teams.append(redhairs)

    match47.teams.append(nrg)
    match47.teams.append(baroque)

    match48.teams.append(geng)
    match48.teams.append(marines)

    match49.teams.append(faze)
    match49.teams.append(strawhats)

    match50.teams.append(arsybaby)
    match50.teams.append(gboyz)

    match51.teams.append(squishyG)
    match51.teams.append(ghostkiller)

    match52.teams.append(theduo)
    match52.teams.append(chiefAssassin)

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
