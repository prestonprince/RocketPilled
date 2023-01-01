import TeamCard from "./TeamCard";

const TeamOptions = ({ setMatchTeamId, teams }) => {
    return (
        <div>
            {teams.map(team => (
                <TeamCard key={team.id} setMatchTeamId={setMatchTeamId} team={team} />
            ) )}
        </div>
    )
};

export default TeamOptions;
