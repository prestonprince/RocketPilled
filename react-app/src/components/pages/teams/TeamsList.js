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
                <span onClick={() => handleClick(team)} key={team.id}>{team.name}</span>
            ))}
        </div>
    )
};

export default TeamsList;
