import { createContext, useContext, useState, useEffect } from 'react';

export const MatchIdContext = createContext();

export const useMatchId = () => useContext(MatchIdContext);

function useSessionStorage(key, defaultValue) {
    const data = window.sessionStorage.getItem(key)

    if (!data) {
        return defaultValue
    };

    return data
};

export default function MatchIdProvider({ children }) {
    const [matchId, setMatchId] = useState( useSessionStorage('matchId', null) );

    useEffect(() => {
        window.sessionStorage.setItem('matchId', matchId)
    }, [matchId])

    return (
        <MatchIdContext.Provider
            value={ {matchId, setMatchId} }
        >
            {children}
        </MatchIdContext.Provider>
    )
}
