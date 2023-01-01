import { useSelector } from "react-redux"

import UserCard from "./UserCard";

const ManageRosterForm = ({ team, setShowModal }) => {
    const allUsers = useSelector(state => state.session.allUsers);

    return (
        <div>
            <ul>
                {allUsers && allUsers.map(user => (<UserCard key={user.id} user={user} team={team} setShowModal={setShowModal} />))}
            </ul>
        </div>
    )
};

export default ManageRosterForm;
