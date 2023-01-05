import { useState } from "react";
import { useSelector } from "react-redux";
import MyTeamsContainer from "./MyTeamsContainer";
import TeamsNav from "./TeamsNav";
import styles from "../../cssModules/MyTeams.module.css"


const MyTeams = () => {
    const user = useSelector(state => state.session.user)
    const [teams, setTeams] = useState(user.Solo)
    const [click, setClick] = useState(false)

    return (
        <div className={styles.container}>
               <div className={styles.top}>
                <div className={styles.header}>
                    <span><span className={styles.my}>MY</span> TEAMS</span>
                </div>
                <TeamsNav teams={teams} setTeams={setTeams} user={user} />
            </div>
            <MyTeamsContainer teams={teams} setClick={setClick} click={click} />
        </div>
    )
};

export default MyTeams;
