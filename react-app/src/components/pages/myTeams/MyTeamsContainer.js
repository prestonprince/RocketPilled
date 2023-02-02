import { useHistory } from 'react-router-dom';
import MyTeamCard from "./MyTeamCard";
import styles from '../../cssModules/MyTeamsContainer.module.css'

const MyTeamsContainer = ({ teams, setClick, click }) => {
    const history = useHistory()

    const myTeams = Object.values(teams)

    const handleClick = () => {
        history.push('/teams/new')
    }

    return (
        <div className={styles.container}>
            {myTeams.length > 0 ? (
                <div className={styles.cardContainer}>
                    {myTeams.map(team => (<MyTeamCard setClick={setClick} click={click} key={team.id} team={team} />))}
                </div>
            ): 
            <div className={styles.container}>
                <h2 className={styles.title}>No teams yet</h2>
                <div className={styles.btnContainer}>
                    <button className={styles.btnContainer} onClick={handleClick}>
                        <div className={styles.iconContainer}>
                            <span style={{color: '#7bff80', fontSize: ".95rem"}} class="material-symbols-outlined">
                                    add
                            </span>
                        </div>
                        Create Team
                    </button>
                </div>
            </div>
        }
        </div>
    )
};

export default MyTeamsContainer;
