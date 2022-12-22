import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyTeamsConainer from "./MyTeamsContainer";
import TeamsNav from "./TeamsNav";
import { authenticate } from '../../../store/session'

const MyTeams = () => {
    const user = useSelector(state => state.session.user)
    const dispatch = useDispatch()
    const [teams, setTeams] = useState(user.Solo)

    useEffect(() => {
        dispatch(authenticate())
    }, [dispatch])

    return (
        <div>
            <span>My Teams</span>
            <TeamsNav setTeams={setTeams} user={user} />
            <MyTeamsConainer teams={teams} />
        </div>
    )
};

export default MyTeams;
