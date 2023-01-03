import { useSelector } from "react-redux";
import TeamsList from "./TeamsList";

import styles from '../../cssModules/TeamsContainer.module.css'

const TeamsContainer = () => {
    const teams = useSelector(state => state.teams)

    return (
        <div className={styles.container}>
            <div className={styles.list_container}>
                <div className={styles.bar}></div>
                <div className={styles.header}>
                    <span className={styles.gameLabel}>ROCKET LEAGUE</span>
                    <span className={styles.teamLabel}>SOLO TEAMS</span>
                </div>
                <div>
                    <TeamsList teams={teams.Solo} />
                </div>
            </div>
            <div className={styles.list_container}>
                <div className={styles.bar}></div>
                <div className={styles.header}>
                    <span className={styles.gameLabel}>ROCKET LEAGUE</span>
                    <span className={styles.teamLabel}>DUO TEAMS</span>
                </div>
                <div>
                    <TeamsList teams={teams.Duo} />
                </div>
            </div>
            <div className={styles.list_container}>
                <div className={styles.bar}></div>
                <div className={styles.header}>
                    <span className={styles.gameLabel}>ROCKET LEAGUE</span>
                    <span className={styles.teamLabel}>SQUAD TEAMS</span>
                </div>
                <div>
                    <TeamsList teams={teams.Squad} />
                </div>
            </div>
        </div>
    )
};

export default TeamsContainer;
