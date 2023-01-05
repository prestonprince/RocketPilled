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

    return (
        <div>
            <h3>{team.name}</h3>
            <button onClick={() => handleTeamClick(team)}>manage</button>
        </div>
    )
};

export default MyTeamCard;
