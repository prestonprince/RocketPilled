import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { deleteTeam } from "../../../store/teams";
import TeamBar from "./TeamBar";
import TeamRoster from "./TeamRoster";
import TeamMatches from "./TeamMatches";
import { getAllUsers } from "../../../store/session";

const TeamDetails = () => {
    const { id, type } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const teams = useSelector(state => state.teams)
    const user = useSelector(state => state.session.user)
    const team = teams[type][id]

    const handleDisband = (team) => {
        dispatch(deleteTeam(team)).then(() => {
            history.push('/my-teams')
        })
    }

    const handleManage = () => {
        dispatch(getAllUsers())
    }

    return (
        <div>
            <div>
                <span>{team.name}</span>
                {user.id === team.owner_id && (
                    <div>
                        <button onClick={handleManage}>Manage Roster</button>
                        <button onClick={() => handleDisband(team)}>Disband</button>
                    </div>
                )}
            </div>
            <div>
                <TeamBar team={team}/>
            </div>
            <div>
                <TeamRoster team={team} />
                <TeamMatches />
            </div>
        </div>
    )
};

export default TeamDetails;
