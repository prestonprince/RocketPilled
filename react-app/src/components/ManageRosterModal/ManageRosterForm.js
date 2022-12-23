import { useSelector } from "react-redux"

import UserCard from "./UserCard";

const ManageRosterForm = () => {
    const allUsers = useSelector(state => state.session.allUsers);
    console.log(allUsers);

    return (
        <div>
            <ul>
                {allUsers.map(user => (<UserCard key={user.id} user={user} />))}
            </ul>
        </div>
    )
};

export default ManageRosterForm;
