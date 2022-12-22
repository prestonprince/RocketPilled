import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const TeamDetails = () => {
    const { id, type } = useParams()
    const teams = useSelector(state => state.teams)
    const user = useSelector(state => state.session.user)
    const team = teams[type][id]

    return (
        <div>
            <span>{team.name}</span>
            {user.id === team.owner_id && (
                <button>Disband</button>
            )}
        </div>
    )
};

export default TeamDetails;
