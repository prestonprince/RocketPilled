const TeamsList = ({ teams }) => {
    return (
        <div>
            <ul>
                {Object.values(teams).map(team => (
                    <span key={team.id}>{team.name}</span>
                ))}
            </ul>
        </div>
    )
};

export default TeamsList;
