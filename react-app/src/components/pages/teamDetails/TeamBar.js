const TeamBar = ({ team }) => {
    const completedMatches = team.matches.filter(match => match.status === 'completed');
    const winningMatches = completedMatches.filter(match => match.winning_team_id === team.id)
    const losingMatches = completedMatches.filter(match => match.winning_team_id !== team.id)

    let record;
    if (completedMatches.length > 0) {
        record = `${winningMatches.length}W - ${losingMatches.length}L`
    } else {
        record = '0W - 0L'
    };
    
    const recentMatches = [];

    let limit; 
    if (completedMatches.length >= 5) limit = 4
    else {
        limit = completedMatches.length-1
    }

    let i = 0;
    while (i <= limit) {
        const match = completedMatches.reverse()[i]
        recentMatches.push(match)
        ++i
    };

    const recent = recentMatches.map(match => {
        if (match.winning_team_id === team.id) return 'W'
        else return 'L'
    }).reverse();

    return (
        <div>
            <div>
                <span>XP</span>
                <span>{team.xp_points} XP</span>
            </div>
            <div>
                <span>CAREER RECORD</span>
                <span>{record}</span>
            </div>
            <div>
                <span>RECENT MATCHES</span>
                <span>
                    {recent.length > 0 ? 
                    recent.map((match, i) => (<span key={i}>{match}</span>)) : 
                    (<span>No Recent Matches</span>)}
                </span>
            </div>
        </div>
    )
};

export default TeamBar;
