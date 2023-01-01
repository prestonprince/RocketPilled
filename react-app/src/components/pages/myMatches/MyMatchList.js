import MyMatchCard from "./MyMatchCard";

const MyMatchList = ({ userTeams, matches }) => {
    // console.log(matches);

    return (
        <div>
            <h2>match list</h2>
            {matches.map(match => (
                <MyMatchCard key={match.id} userTeams={userTeams} match={match}/>
            ))}
        </div>
    )
};

export default MyMatchList;
