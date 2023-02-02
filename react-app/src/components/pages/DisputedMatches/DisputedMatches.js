import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllMatches } from "../../../store/matches";

import DisputedMatchCard from "./DisputedMatchCard";
import styles from "./DisputedMatches.module.css"

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
            <div className={styles.container}>
                <div className={styles.header}>
                    <span><span className={styles.my}>MY</span> DISPUTED MATCHES</span>
                </div>
                <div className={styles.matchCardContainer}>
                    {allMatches && disputedMatches.length > 0 && disputedMatches.map(match => (
                        <DisputedMatchCard userTeams={userTeams} key={match.id} match={match} />
                    ))}
                </div>
            </div>
        ) :
            <div className={styles.loader}></div>
        }
        </>
    )
};

export default DisputedMatches;
