import { useSelector } from "react-redux";

const MyMatchCard = ({ userTeams, match }) => {
    const userTeamsIds = userTeams.map(team => team.id)
    const opp = match.teams.find(team => !userTeamsIds.includes(team.id));

    return (
        <div>
            <span>ROCKET LEAGUE {match.type.toUpperCase()}</span>
            <span>Rocket League</span>
            <span>VS
                {opp ? (
                    <span>{opp.name}</span>
                ):
                    <span>TBD</span>
                }
            </span>
            <span>{match.map}</span>
            <span>{match.status}</span>
        </div>
    )
};

export default MyMatchCard;
