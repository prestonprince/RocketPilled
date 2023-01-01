import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from 'react-router-dom';

import { acceptMatch, cancelMatch } from "../../../store/matches";

const MatchCard = ({ match }) => {
    const [isUserMatch, setIsUserMatch] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
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

    const handleCancel = () => {
        dispatch(cancelMatch(match, matchTeamIds[0]))
    }

    const handleAccept = () => {
        const team = Object.values(user[match.type])[0];

        if (!team ||
            (team.type === 'Duo' && team.members.length < 2) ||
            (team.type === 'Squad' && team.members.length < 3)) {
            alert('You must have a valid team and full roster to accept this match');
            history.push('/my-teams');
            return;
        };
        dispatch(acceptMatch(team.id, match.id))
    };

    return (
        <div>
            <span>XP</span>
            <span>{match.type}</span>
            <span>{match.map}</span>
            {(user && isUserMatch) && matchTeamOwnerIds.includes(user.id) && (
                <button onClick={handleCancel}>Cancel</button>
            )}
            {user && !isUserMatch && (
                <button onClick={handleAccept}>Accept</button>
            )}
        </div>
    )
};

export default MatchCard;
