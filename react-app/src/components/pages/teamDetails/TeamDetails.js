import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { deleteTeam, removeTeamMember } from "../../../store/teams";
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

    const handleLeave = (team) => {
        dispatch(removeTeamMember(user.id, team)).then(() => {
            history.push('/my-teams')
        })
    }

    console.log(team.matches)

    const completedMatches = team.matches.filter(match => match.status === 'completed');
    console.log(completedMatches)

    return (
        <div>
            <div>
                <div>
                    <h2>{team.name}</h2>
                    <span>EST. 10/28/22</span>
                    <span class="material-symbols-outlined">
                        shuffle
                    </span>
                    <span>Rocket League</span>
                    <span class="material-symbols-outlined">
                        list
                    </span>
                    <span>Global {team.type} Ladder</span>
                </div>
                {user.id === team.owner_id ? (
                    <div>
                        {(type !== 'Solo' && teamSizeCheck(team)) && (
                            <ManageRosterModal team={team} />
                        )}
                        <button onClick={() => handleDisband(team)}>Disband</button>
                    </div>
                ):
                    <div>
                        <button onClick={() => handleLeave(team)}>Leave Team</button>
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
