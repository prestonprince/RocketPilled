import { useState } from "react";
import { useSelector } from "react-redux";
import MyTeamsConainer from "./MyTeamsContainer";
import TeamsNav from "./TeamsNav";


const MyTeams = () => {
    const user = useSelector(state => state.session.user)
    const [teams, setTeams] = useState(user.Solo)
    const [click, setClick] = useState(false)

    console.log(teams)

    return (
        <div>
            <span>My Teams</span>
            <TeamsNav setTeams={setTeams} user={user} />
            <MyTeamsConainer teams={teams} setClick={setClick} click={click} />
        </div>
    )
};

export default MyTeams;
