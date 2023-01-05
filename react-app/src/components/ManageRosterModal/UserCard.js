import { useDispatch } from "react-redux";
import { addTeamMember } from "../../store/teams";
import { useNotification } from '../../context/Notification'

const UserCard = ({ user, team, setShowRosterModal }) => {
    const dispatch = useDispatch();
    const { setOpen, setContent, setShowModal } = useNotification()


    const handleAddToTeam = () => {
        dispatch(addTeamMember(user.id, team.id)).then(() => setShowRosterModal(false)).catch(async(res) => {
            const data = await res.json();
            console.log(data.error)
            setContent(data.error)
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
        })
    }

    return (
        <div>
            <span>{user.username}</span>
            <button onClick={handleAddToTeam}>Add to Team</button>
        </div>
    )
};

export default UserCard;
