import { useHistory } from "react-router-dom";

const TeamsList = ({ teams }) => {
    const history= useHistory()

    const handleClick = (team) => {
        history.push(`/teams/${team.type}/${team.id}`)
    }

    return (
        <div>
            <ul>
                {Object.values(teams).map(team => (
                    <span onClick={() => handleClick(team)} key={team.id}>{team.name}</span>
                ))}
            </ul>
        </div>
    )
};

export default TeamsList;
