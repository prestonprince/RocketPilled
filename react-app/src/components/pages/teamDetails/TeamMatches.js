import styles from '../../cssModules/TeamMatches.module.css'
import TeamMatchCard from './TeamMatchCard';


const TeamMatches = ({ team }) => {
    console.log(team.matches)
    const matches = team.matches.filter(match => match.status !== 'posted')
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <span>MATCHES</span>
                <span className={styles.detail}>View all scheduled upcoming and past matches.</span>
            </div>
            <div className={styles.cardContainer}>
                {matches.map(match => <TeamMatchCard key={match.id} team={team} match={match} />)}
            </div>
        </div>
    )
};

export default TeamMatches;
