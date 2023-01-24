import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react";

import { getAllUsers } from "../../store/session";
import UserCard from "./UserCard";
import styles from '../cssModules/ManageRosterForm.module.css'

const ManageRosterForm = ({ team, setShowRosterModal }) => {
    const dispatch = useDispatch()
    const allUsers = useSelector(state => state.session.allUsers);
    const [isLoaded, setIsLoaded] = useState(false)

    const teamMembersIds = team.members.map(player => player.id);

    useEffect(async() => {
        await dispatch(getAllUsers())
        setIsLoaded(true)
    }, [dispatch])

    let validUsers;
    if (allUsers && allUsers.length > 0) {
        validUsers = allUsers
        .filter(user => !teamMembersIds.includes(user.id))
        .filter(user => user[team.type].length < 1)
    };

    return (
        <>
            {isLoaded && (
                <div className={styles.container}>
                    <div className={styles.cardContainer}>
                        {allUsers && validUsers.map(user => (<UserCard key={user.id} user={user} team={team} setShowRosterModal={setShowRosterModal} />))}
                    </div>
                </div>
            )}
        </>
    )
};

export default ManageRosterForm;
