import { useSelector } from "react-redux"
import styles from '../cssModules/ManageRosterForm.module.css'

import UserCard from "./UserCard";

const ManageRosterForm = ({ team, setShowRosterModal }) => {
    const allUsers = useSelector(state => state.session.allUsers);
    const teamMembersIds = team.members.map(player => player.id);;
    const validUsers = allUsers
    .filter(user => !teamMembersIds.includes(user.id))
    .filter(user => user[team.type].length < 1)

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                {allUsers && validUsers.map(user => (<UserCard key={user.id} user={user} team={team} setShowRosterModal={setShowRosterModal} />))}
            </div>
        </div>
    )
};

export default ManageRosterForm;
