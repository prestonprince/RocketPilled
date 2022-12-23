import { useHistory } from 'react-router-dom';
import MyTeamCard from "./MyTeamCard";

const MyTeamsConainer = ({ teams, setClick, click }) => {
    const history = useHistory()

    const myTeams = Object.values(teams)

    const handleClick = () => {
        history.push('/teams/new')
    }

    return (
        <div>
            {myTeams.length > 0 ? (
                <ul>
                    {myTeams.map(team => (<MyTeamCard setClick={setClick} click={click} key={team.id} team={team} />))}
                </ul>
            ): 
            <h2>No teams yet</h2>
        }
            <button onClick={handleClick}>Create Team</button>
        </div>
    )
};

export default MyTeamsConainer;
