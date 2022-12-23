const UserCard = ({ user }) => {
    return (
        <div>
            <span>{user.username}</span>
            <button>Add to Team</button>
        </div>
    )
};

export default UserCard;
