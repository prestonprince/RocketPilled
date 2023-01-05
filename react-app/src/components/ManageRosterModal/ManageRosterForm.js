import { useSelector } from "react-redux"

import UserCard from "./UserCard";

const ManageRosterForm = ({ team, setShowRosterModal }) => {
    const allUsers = useSelector(state => state.session.allUsers);

    return (
        <div>
            <ul>
                {allUsers && allUsers.map(user => (<UserCard key={user.id} user={user} team={team} setShowRosterModal={setShowRosterModal} />))}
            </ul>
        </div>
    )
};

export default ManageRosterForm;
