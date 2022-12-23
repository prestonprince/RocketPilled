import PlayerCard from "./PlayerCard";

const TeamRoster = ({ team, setRemovePlayer }) => {

    return (
        <div>
            {team.members.map(player => <PlayerCard key={player.id} player={player} team={team} setRemovePlayer={setRemovePlayer} />)}
        </div>
    )
};

export default TeamRoster;
