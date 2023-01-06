import TeamCard from "./TeamCard";
import styles from '../cssModules/TeamOptions.module.css'

const TeamOptions = ({ matchType, matchTeamId, setMatchTeamId, teams }) => {
    return (
        <div className={styles.container}>
            {teams.map(team => (
                <TeamCard key={team.id} matchType={matchType} matchTeamId={matchTeamId} setMatchTeamId={setMatchTeamId} team={team} />
            ) )}
        </div>
    )
};

export default TeamOptions;
