import MatchCard from "./MatchCard";

const MatchList = ({ matches }) => {
    
    return (
        <>
        {matches.length > 0 ? (
            <div>
                {matches.map(match => (
                    <MatchCard key={match.id} match={match}/>
                ))}
            </div>
        ):
            <span>No matches posted</span>
        }
        </>
    )
};

export default MatchList;
