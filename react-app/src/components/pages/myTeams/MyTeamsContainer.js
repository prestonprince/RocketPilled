import { useHistory } from 'react-router-dom';
import MyTeamCard from "./MyTeamCard";

const MyTeamsConainer = ({ teams }) => {
    const history = useHistory()

    const handleClick = () => {
        history.push('/teams/new')
    }

    return (
        <div>
            {teams.length > 0 ? (
                <ul>
                    {teams.map(team => (<MyTeamCard key={team.id} team={team} />))}
                </ul>
            ): 
            <h2>No teams yet</h2>
        }
            <button onClick={handleClick}>Create Team</button>
        </div>
    )
};

export default MyTeamsConainer;
