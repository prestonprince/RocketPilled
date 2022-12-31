import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

const MatchCard = ({ match }) => {
    const [isUserMatch, setIsUserMatch] = useState(false)

    const user = useSelector(state => state.session.user)
    const matchTeamIds = match.teams.map(team => team.id)

    let userTeams;
    if (user) {
        userTeams = Object.values(user[match.type])
    }

    useEffect(() => {
        if (user) {
            for (const team of userTeams) {
                if (matchTeamIds.includes(team.id)) {
                    setIsUserMatch(true)
                }
            }
        }
    }, [])


    return (
        <div>
            <span>XP</span>
            <span>{match.type}</span>
            <span>{match.map}</span>
            {user && isUserMatch ? (
                <button>Cancel</button>
            ):
                <button>Accept</button>
            }
        </div>
    )
};

export default MatchCard;
