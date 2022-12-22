import MyTeamCard from "./MyTeamCard";

const MyTeamsConainer = ({ teams }) => {
    return (
        <div>
            {teams.length > 0 ? (
                <ul>
                    {teams.map(team => (<MyTeamCard key={team.id} team={team} />))}
                </ul>
            ): 
            <h2>No teams yet</h2>
        }
        </div>
    )
};

export default MyTeamsConainer;
