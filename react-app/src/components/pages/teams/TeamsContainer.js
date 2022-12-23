import { useSelector } from "react-redux";
import TeamsList from "./TeamsList";

import styles from '../../cssModules/TeamsContainer.module.css'

const TeamsContainer = () => {
    const teams = useSelector(state => state.teams)

    return (
        <div className={styles.container}>
            <div className={styles.list_container}>
                <div>
                    <span>Solo Teams</span>
                </div>
                <div>
                    <TeamsList teams={teams.Solo} />
                </div>
            </div>
            <div className={styles.list_container}>
                <span>Duo Teams</span><TeamsList teams={teams.Duo} />
            </div>
            <div className={styles.list_container}>
                <div>
                    <span>Squad Teams</span>
                </div>
                <div>
                    <TeamsList teams={teams.Squad} />
                </div>
            </div>
        </div>
    )
};

export default TeamsContainer;
