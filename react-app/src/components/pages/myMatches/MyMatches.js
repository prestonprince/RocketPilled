import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import { getAllMatches } from "../../../store/matches";
import MyMatchList from "./MyMatchList";

const MyMatches = () => {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const user = useSelector(state => state.session.user)
    const allMatches = useSelector(state => state.matches);

    useEffect(() => {
        dispatch(getAllMatches()).then(() => setIsLoaded(true))
    }, [dispatch]);

    const matchArr = Object.values(allMatches).map(obj => Object.values(obj)).flat();
    const userTeams = [
        ...Object.values(user.Solo),
        ...Object.values(user.Duo),
        ...Object.values(user.Squad),
    ]
    
    const userTeamsMatches = userTeams.map(team => {
        return team.matches.map(match => match.id)
    }).flat();
    
    const userMatches = matchArr.filter(match => userTeamsMatches.includes(match.id));

    return (
        <>
        {isLoaded ? (
            <div>
                <div>
                    <h2>MY MATCHES</h2>
                </div>
                <div>
                    <MyMatchList userTeams={userTeams} matches={userMatches}/>
                </div>
            </div>
        ): 
            <div>Loading...</div>
        }
        </>
    )
};

export default MyMatches;
