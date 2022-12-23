import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, useState } from 'react'

import { deleteTeam } from "../../../store/teams"

const MyTeamCard = ({ team, setClick, click }) => {
    const history = useHistory()
    const dispatch = useDispatch()

    useEffect(() => {}, [click])

    const handleTeamClick = (team) => {
        history.push(`/teams/${team.type}/${team.id}`)
    }

    const handleDisband = (team) => {
        dispatch(deleteTeam(team)).then(() => {
            setClick(!click)
        })
    };

    return (
        <div>
            <h3>{team.name}</h3>
            <button onClick={() => handleTeamClick(team)}>manage</button>
            <button onClick={() => handleDisband(team)}>disband</button>
        </div>
    )
};

export default MyTeamCard;
