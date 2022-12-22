const TeamsNav = ({ setTeams, user }) => {
    const soloClick = () => {
        setTeams(user.Solo)
    };

    const duoClick = () => {
        setTeams(user.Duo)
    };

    const squadClick = () => {
        setTeams(user.Squad)
    };

    return (
        <div>
            <span onClick={soloClick}>Solo</span>
            <span onClick={duoClick}>Duo</span>
            <span onClick={squadClick}>Squad</span>
        </div>
    )
};

export default TeamsNav;
