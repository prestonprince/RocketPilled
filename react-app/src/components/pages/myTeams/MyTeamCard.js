import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react'

import { deleteTeam } from "../../../store/teams"
import { removeTeamMember } from "../../../store/teams";
import { authenticate } from "../../../store/session";

const MyTeamCard = ({ team, setClick, click }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)

    useEffect(() => {}, [click])

    const handleTeamClick = (team) => {
        history.push(`/teams/${team.type}/${team.id}`)
    }

    const handleDisband = (team) => {
        dispatch(deleteTeam(team))
        .then(() => {
            setClick(!click)
        })
    };

    const handleLeaveTeam = (team, user) => {
        dispatch(removeTeamMember(user.id, team))
        .then(() => {
            setClick(!click)
        })
    };

    return (
        <div>
            <h3>{team.name}</h3>
            <button onClick={() => handleTeamClick(team)}>manage</button>
            {user && team.owner_id === user.id ? (
                <button onClick={() => handleDisband(team)}>disband</button>
            ):
                <button onClick={() => handleLeaveTeam(team, user)}>leave team</button>
            }
        </div>
    )
};

export default MyTeamCard;
