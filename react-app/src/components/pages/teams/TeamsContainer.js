import { useSelector } from "react-redux";
import TeamsList from "./TeamsList";

const TeamsContainer = () => {
    const teams = useSelector(state => state.teams)

    return (
        <div>
            <span>Solo:</span><TeamsList teams={teams.Solo} />
            <span>Duo:</span><TeamsList teams={teams.Duo} />
            <span>Squad:</span><TeamsList teams={teams.Squad} />
        </div>
    )
};

export default TeamsContainer;
