const TeamBar = ({ team }) => {
    return (
        <div>
            <div>
                <span>XP</span>
                <span>{team.xp_points} XP</span>
            </div>
            <div>
                <span>CAREER record</span>
                <span>209W - 14L</span>
            </div>
            <div>
                <span>RECENT MATCHES</span>
                <span>W W W W L</span>
            </div>
        </div>
    )
};

export default TeamBar;
