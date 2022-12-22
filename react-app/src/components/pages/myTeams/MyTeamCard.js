import { useHistory } from "react-router-dom";

const MyTeamCard = ({ team }) => {
    const history = useHistory()

    const handleTeamClick = (team) => {
        history.push(`/teams/${team.type}/${team.id}`)
    }

    return (
        <div onClick={() => handleTeamClick(team)}>
            <h3>{team.name}</h3>
            <button>manage</button>
            <button>disband</button>
        </div>
    )
};

export default MyTeamCard;
