import { useHistory } from "react-router-dom";
import styles from '../../cssModules/TeamsList.module.css'

const TeamsList = ({ teams }) => {
    const history= useHistory()

    const handleClick = (team) => {
        history.push(`/teams/${team.type}/${team.id}`)
    }

    return (
        <div className={styles.container}>
            {Object.values(teams).map(team => (
                <div className={styles.card}>
                    <span key={team.id}>{team.name}</span>
                    <button className={styles.view} onClick={() => handleClick(team)}>View</button>
                </div>
            ))}
        </div>
    )
};

export default TeamsList;
