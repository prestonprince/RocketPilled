import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

import { cancelMatch } from "../../../store/matches";

const MatchCard = ({ match }) => {
    const [isUserMatch, setIsUserMatch] = useState(false)
    const dispatch = useDispatch()
    const user = useSelector(state => state.session.user)
    const matchTeamIds = match.teams.map(team => team.id)
    const matchTeamOwnerIds = match.teams.map(team => team.owner_id);

    let userTeams;
    if (user) {
        userTeams = Object.values(user[match.type]);
    };

    useEffect(() => {
        if (user) {
            for (const team of userTeams) {
                if (matchTeamIds.includes(team.id)) {
                    setIsUserMatch(true)
                }
            }
        }
    }, [])

    // const teamId = matchTeamIds.find(id => match.teams[0].id === id);
    // console.log(matchTeamIds)
    // console.log(teamId)

    const handleCancel = () => {
        dispatch(cancelMatch(match, matchTeamIds[0]))
    }


    return (
        <div>
            <span>XP</span>
            <span>{match.type}</span>
            <span>{match.map}</span>
            {(user && isUserMatch) && matchTeamOwnerIds.includes(user.id) && (
                <button onClick={handleCancel}>Cancel</button>
            )}
            {user && !isUserMatch && (
                <button>Accept</button>
            )}
        </div>
    )
};

export default MatchCard;
