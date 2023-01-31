import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMatches } from "../../../store/matches";

function DisputedMatches() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    const user = useSelector(state => state.session.user)
    const allMatches = useSelector(state => state.matches)

    useEffect(() => {
        dispatch(getAllMatches()).then(() => setIsLoaded(true))
    }, [dispatch])

    const matchArr = Object.values(allMatches).map(obj => Object.values(obj)).flat()
    const userTeams = [
        ...Object.values(user.Solo),
        ...Object.values(user.Duo),
        ...Object.values(user.Squad),
    ]

    const userTeamsMatches = userTeams.map(team => {
        return team.matches.map(match => match.id)
    }).flat();

    const userMatches = matchArr.filter(match => userTeamsMatches.includes(match.id));
    const disputedMatches = userMatches.filter(match => match.status === 'disputed')

    return (
        <>
        {isLoaded ? (
            <div style={{marginTop: '10vh'}}>
                {disputedMatches.map(match => (
                    <span>{match.id}</span>
                ))}
            </div>
        ) :
            <div></div>
        }
        </>
    )
};

export default DisputedMatches;
