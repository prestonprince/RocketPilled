import { useDispatch } from "react-redux";
import { addTeamMember } from "../../store/teams";

const UserCard = ({ user, team, setShowModal }) => {
    const dispatch = useDispatch();


    const handleAddToTeam = () => {
        dispatch(addTeamMember(user.id, team.id)).then(() => setShowModal(false))
    }

    return (
        <div>
            <span>{user.username}</span>
            <button onClick={handleAddToTeam}>Add to Team</button>
        </div>
    )
};

export default UserCard;
