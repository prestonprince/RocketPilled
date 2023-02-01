import { createContext, useContext, useState } from 'react';

export const MatchIdContext = createContext();

export const useMatchId = () => useContext(MatchIdContext);

export default function MatchIdProvider({ children }) {
    const [matchId, setMatchId] = useState(null);

    return (
        <MatchIdContext.Provider
            value={ {matchId, setMatchId} }
        >
            {children}
        </MatchIdContext.Provider>
    )
}
