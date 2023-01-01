import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import MatchesNav from "./MatchesNav";
import MatchesTitleCard from "./MatchesTitleCard";
import MatchList from "./MatchList";

import { getAllMatches } from '../../../store/matches';

import styles from '../../cssModules/Matches.module.css'

const Matches = () => {
    const dispatch = useDispatch();
    const allMatches = useSelector(state => state.matches)
    const user = useSelector(state => state.session.user)
    const [isLoaded, setIsLoaded] = useState(false)
    const [type, setType] = useState('all')

    useEffect(() => {
        dispatch(getAllMatches()).then(() => setIsLoaded(true))
    }, [dispatch, user])

    const allMatchesArr = Object.values(allMatches)
    let filteredMatches = allMatchesArr.map(obj => Object.values(obj)).flat().filter(match => match.status === 'posted')

    if (type !== 'all') {
        filteredMatches = filteredMatches.filter(match => match.type === type)
    };

    return (
        <>
            {isLoaded ? (
                <div className={styles.container}>
                    <MatchesTitleCard />
                    <MatchesNav type={type} setType={setType} />
                    <MatchList matches={filteredMatches} />
                </div>
            ):
                <div>
                    <span>Loading...</span>
                </div>
            }
        </>     
    )
};

export default Matches;
