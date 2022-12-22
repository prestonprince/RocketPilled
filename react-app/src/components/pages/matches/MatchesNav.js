import { useHistory } from "react-router-dom";

const MatchesNav = () => {
    const history = useHistory()

    const teamsButton = () => {
        history.push('/teams')
    }

    return (
        <button onClick={teamsButton}>Teams</button>
    )
};

export default MatchesNav;
