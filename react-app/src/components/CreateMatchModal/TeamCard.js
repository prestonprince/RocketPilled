const TeamCard = ({ setMatchTeamId, team }) => {

    const handleClick = () => {
        setMatchTeamId(team.id)
    }

    return (
        <div onClick={handleClick}>
            <span>{team.type}</span>
            <span>{team.name}</span>
        </div>
    )
};

export default TeamCard;
