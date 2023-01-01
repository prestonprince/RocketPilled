import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { deleteTeam } from "../../../store/teams";
import TeamBar from "./TeamBar";
import TeamRoster from "./TeamRoster";
import TeamMatches from "./TeamMatches";
import ManageRosterModal from "../../ManageRosterModal";

const TeamDetails = () => {
    const { id, type } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const teams = useSelector(state => state.teams)
    const user = useSelector(state => state.session.user)
    const [removePlayer, setRemovePlayer] = useState(false)

    const team = teams[type][id]


    useEffect(() => {}, [removePlayer])

    const handleDisband = (team) => {
        dispatch(deleteTeam(team)).then(() => {
            history.push('/my-teams')
        })
    }

    const teamSizeCheck = (team) => {
        if (
            (type === 'Duo' && team.members.length < 2) ||
            (type === 'Squad' && team.members.length < 3)
            ) return true;
            else return false;
    }

    return (
        <div>
            <div>
                <span>{team.name}</span>
                {user.id === team.owner_id ? (
                    <div>
                        {(type !== 'Solo' && teamSizeCheck(team)) && (
                            <ManageRosterModal team={team} />
                        )}
                        <button onClick={() => handleDisband(team)}>Disband</button>
                    </div>
                ):
                    <div>
                        <button>Leave Team</button>
                    </div>
                }
            </div>
            <div>
                <TeamBar team={team}/>
            </div>
            <div>
                <TeamRoster setRemovePlayer={setRemovePlayer} team={team} />
                <TeamMatches />
            </div>
        </div>
    )
};

export default TeamDetails;
