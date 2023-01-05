import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import { getAllMatches } from '../../../store/matches';
import styles from '../../cssModules/TeamMatchCard.module.css'

const TeamMatchCard = ({ team, match }) => {
    const [matchesLoaded, setMatchesLoaded] = useState(false)
    const matches = useSelector(state => state.matches)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllMatches()).then(() => {
            setMatchesLoaded(true)
        })
    }, [dispatch])

    const myMatch = matches[match.type][match.id];

    let opp;
    if (myMatch) {
        opp = myMatch.teams.find(t => t.id !== team.id);
    }

    let newStatus = 'L'
    let xp = '-5'
    if (match.winning_team_id === team.id) {
        newStatus = "W";
        xp = '+10'
    } 

    return (
        <>
        {matchesLoaded && opp ? (
            <div className={styles.container}>
                <div className={styles.infoCard}>
                    <span className={styles.opp}>vs {opp.name}</span>
                </div>
                <div className={styles.infoCard}>
                    <span className={styles.title}>STATUS</span>
                    <span className={newStatus === 'W' ? styles.statusW : styles.statusL}>{newStatus}</span>
                </div>
                <div className={styles.infoCard}>
                    <span className={styles.title}>NET XP</span>
                    <span className={newStatus === 'W' ? styles.statusW : styles.statusL}>{xp}</span>
                </div>
            </div>
            
        ) :
            <div className={styles.loaderCard}></div>
        }
        </>
    )
};

export default TeamMatchCard;
