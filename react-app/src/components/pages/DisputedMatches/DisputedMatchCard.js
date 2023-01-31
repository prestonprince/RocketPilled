import styles from '../../cssModules/MyMatchCard.module.css'

function DisputedMatchCard({ userTeams, match }) {
    const userTeamsIds = userTeams.map(team => team.id)
    const opp = match.teams.find(team => !userTeamsIds.includes(team.id));
    return (
    <>
        <div className={styles.container}>
            <div className={styles.pic_container}>
                <img
                    className={styles.pic}
                    src="https://rocketleague.media.zestyio.com/rl_cross-play_asset_no-text.jpg"
                    alt="rlpic"
                >
                </img>
            </div>
            <div className={styles.infoContainer}>
                <span className={styles.name}>ROCKET LEAGUE {match.type.toUpperCase()}</span>
                <span className={styles.rl}>Rocket League | Cross-Platform</span>
                <span className={styles.vs}>VS
                    {opp ? (
                        <span> {opp.name}</span>
                    ):
                        <span> TBD</span>
                    }
                </span>
                <div className={styles.footer}>
                    <span>{match.map}</span>
                    <span>|</span>
                    <span>{match.status}</span>
                </div>
            </div>
        </div>
    </>
      
    )
};

export default DisputedMatchCard
