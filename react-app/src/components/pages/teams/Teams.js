import { useSelector } from "react-redux";
import TeamsContainer from "./TeamsContainer";
import styles from "../../cssModules/Teams.module.css"

const Teams = () => {
    const teams = useSelector(state => state.teams)

    return (
        <div className={styles.container}>
            {teams ? (
                <TeamsContainer />
            ): 
                <h3>Teams loading...</h3>
            }
        </div>
    )
};

export default Teams;
