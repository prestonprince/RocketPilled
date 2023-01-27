import styles from './ReportCard.module.css'

function ReportCard({opp, userTeam, match }) {
    const report = match.reports.find(report => report.team_id === userTeam.id);
    return (
        <>
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                <span>ROCKET LEAGUE {match.type.toUpperCase()}</span>
                <span>vs {opp.name}</span>
                {report.is_win ? (
                    <span>reported <span className={styles.win}>WIN</span></span>
                ) :
                    <span>reported <span className={styles.loss}>LOSS</span></span>
                }
            </div>
        </div>
        </>
    )
};

export default ReportCard
