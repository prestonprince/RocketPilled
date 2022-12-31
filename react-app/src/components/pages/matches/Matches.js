import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import MatchesNav from "./MatchesNav";
import MatchesTitleCard from "./MatchesTitleCard";
import MatchList from "./MatchList";

import { getAllMatches } from '../../../store/matches';

const Matches = () => {
    const dispatch = useDispatch();
    const allMatches = useSelector(state => state.matches)
    const [isLoaded, setIsLoaded] = useState(false)
    const [type, setType] = useState('all')

    useEffect(() => {
        dispatch(getAllMatches()).then(() => setIsLoaded(true))
    }, [dispatch])

    let matches = allMatches[type];
    if (type === 'all') {
        matches = allMatches
    };

    return (
        <>
            {isLoaded ? (
                <div>
                    <MatchesTitleCard />
                    <MatchesNav setType={setType} />
                    <MatchList matches={matches} type={type} />
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
