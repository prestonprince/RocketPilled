const MatchList = ({ matches, type }) => {
    let matchArr = Object.values(matches);
    if (type === 'all') {
        matchArr = Object.values(matches)
        .map(obj => Object.values(obj))
        .flat()
    };
    
    return (
        <div>
            {matchArr.map(match => (
                <span key={match.id}>{match.map}</span>
            ))}
            <h2>match list</h2>
        </div>
    )
};

export default MatchList;
