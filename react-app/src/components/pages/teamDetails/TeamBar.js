import styles from '../../cssModules/TeamBar.module.css'

const TeamBar = ({ team }) => {
    const completedMatches = team.matches.filter(match => match.status === 'completed');
    const winningMatches = completedMatches.filter(match => {
        return match.winning_team_id === team.id
    })
    const losingMatches = completedMatches.filter(match => match.winning_team_id !== team.id)

    let winPercentage;
    completedMatches.length > 0 ? winPercentage = Math.floor((winningMatches.length / completedMatches.length) * 100) : winPercentage=0

    let record;
    if (completedMatches.length > 0) {
        record = `${winningMatches.length}W - ${losingMatches.length}L`
    } else {
        record = '0W - 0L'
    };
    
    const recentMatches = [];

    let limit; 
    if (completedMatches.length >= 5) limit = 4
    else {
        limit = completedMatches.length-1
    }

    let i = 0;
    while (i <= limit) {
        const match = completedMatches.reverse()[i]
        recentMatches.push(match)
        ++i
    };

    const recent = recentMatches.map(match => {
        if (match.winning_team_id === team.id) return 'W'
        else return 'L'
    }).reverse();

    return (
        <div className={styles.container}>
            <div className={styles.barCardFirst}>
                <div>
                    <span className={`material-symbols-outlined ${styles.badge}`}>
                        military_tech
                    </span>
                </div>
                <div className={styles.barCard}>
                    <span className={styles.title}>XP</span>
                    <span className={styles.content}>{team.xp_points} XP</span>
                </div>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.barCard}>
                <span className={styles.title}>CAREER RECORD</span>
                <span className={styles.content}>{record}</span>
                <span className={styles.percentage}>{winPercentage}% WIN RATE</span>
            </div>
            <div className={styles.divider}></div>
            <div className={styles.barCard}>
                <span className={styles.title}>RECENT MATCHES</span>
                <span className={styles.contentLast}>
                    {recent.length > 0 ? 
                    recent.map((match, i) => (<span key={i}>{match}</span>)) : 
                    (<span>No Recent Matches</span>)}
                </span>
            </div>
        </div>
    )
};

export default TeamBar;
