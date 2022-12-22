import { useSelector } from "react-redux";
import TeamsContainer from "./TeamsContainer";

const Teams = () => {
    const teams = useSelector(state => state.teams)

    return (
        <div>
            {teams ? (
                <TeamsContainer />
            ): 
                <h3>Teams loading...</h3>
            }
        </div>
    )
};

export default Teams;
