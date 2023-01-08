import { useDispatch } from "react-redux";
import { addTeamMember } from "../../store/teams";
import { useNotification } from '../../context/Notification'
import styles from '../cssModules/ManageRosterForm.module.css'

const UserCard = ({ user, team, setShowRosterModal }) => {
    const dispatch = useDispatch();
    const { setOpen, setContent, setShowModal } = useNotification()


    const handleAddToTeam = () => {
        dispatch(addTeamMember(user.id, team.id)).then(() => setShowRosterModal(false)).catch(async(res) => {
            setShowRosterModal(false)
            setContent(res)
            setShowModal(true)
            setTimeout(() => {
                setOpen(true)
            }, 50)
        })
    }

    return (
        <div className={styles.card}>
            <span>{user.username}</span>
            <button className={styles.button} onClick={handleAddToTeam}>Add to Team</button>
        </div>
    )
};

export default UserCard;
