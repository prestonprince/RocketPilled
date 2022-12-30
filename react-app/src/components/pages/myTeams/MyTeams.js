import { useState } from "react";
import { useSelector } from "react-redux";
import MyTeamsConainer from "./MyTeamsContainer";
import TeamsNav from "./TeamsNav";
import styles from "../../cssModules/MyTeams.module.css"


const MyTeams = () => {
    const user = useSelector(state => state.session.user)
    const [teams, setTeams] = useState(user.Solo)
    const [click, setClick] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <span>My Teams</span>
                <TeamsNav setTeams={setTeams} user={user} />
            </div>
            <MyTeamsConainer teams={teams} setClick={setClick} click={click} />
        </div>
    )
};

export default MyTeams;
