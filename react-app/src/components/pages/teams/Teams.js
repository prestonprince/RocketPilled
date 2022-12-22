import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllTeams } from "../../../store/teams";
import TeamsContainer from "./TeamsContainer";

const Teams = () => {
    const dispatch = useDispatch()
    const [teamsLoaded, setTeamsLoaded] = useState(false);

    useEffect(() => {
        dispatch(getAllTeams()).then(() => setTeamsLoaded(true))
    }, [dispatch])

    return (
        <div>
            {teamsLoaded ? (
                <TeamsContainer />
            ): 
                <h3>Teams loading...</h3>
            }
        </div>
    )
};

export default Teams;
