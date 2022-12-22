import { useState } from "react";
import { useSelector } from "react-redux";
import MyTeamsConainer from "./MyTeamsContainer";
import TeamsNav from "./TeamsNav";

const MyTeams = () => {
    const user = useSelector(state => state.session.user)
    const [teams, setTeams] = useState(user.Solo)

    return (
        <div>
            <TeamsNav setTeams={setTeams} user={user} />
            <MyTeamsConainer teams={teams} />
        </div>
    )
};

export default MyTeams;
