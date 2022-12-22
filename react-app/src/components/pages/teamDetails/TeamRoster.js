import PlayerCard from "./PlayerCard";

const TeamRoster = ({ team }) => {

    return (
        <div>
            {team.members.map(player => <PlayerCard key={player.id} player={player} />)}
        </div>
    )
};

export default TeamRoster;
