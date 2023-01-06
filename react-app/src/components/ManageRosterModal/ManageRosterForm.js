import { useSelector } from "react-redux"
import styles from '../cssModules/ManageRosterForm.module.css'

import UserCard from "./UserCard";

const ManageRosterForm = ({ team, setShowRosterModal }) => {
    const allUsers = useSelector(state => state.session.allUsers);

    return (
        <div className={styles.container}>
            <div className={styles.cardContainer}>
                {allUsers && allUsers.map(user => (<UserCard key={user.id} user={user} team={team} setShowRosterModal={setShowRosterModal} />))}
            </div>
        </div>
    )
};

export default ManageRosterForm;
