import { normalize } from "./teams";

//constants
const LOAD_MATCHES = '/matches/LOAD_MATCHES';
const ADD_MATCH = '/matches/ADD_MATCH';

const loadMatches = (payload) => ({
    type: LOAD_MATCHES,
    payload
})

const addMatch = (payload) => ({
    type: ADD_MATCH,
    payload
})

export const getAllMatches = () => async(dispatch) => {
    const response = await fetch('/api/matches', {
        headers: {
            "Content-Type": "application/json"
        }
    });

    if (response.ok) {
        const data = await response.json()
        
        const stateObj = {
            Solo: normalize(data.Solo), 
            Duo: normalize(data.Duo), 
            Squad: normalize(data.Squad)
        }
        
        dispatch(loadMatches(stateObj))
        return stateObj
    }
    throw response
};

export const postMatch = (match) => async(dispatch) => {
    console.log(match)
    const response = await fetch('/api/matches', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(match)
    })

    if (response.ok) {
        const data = await response.json()
        console.log(data)
        dispatch(addMatch(data))
        return data
    }
    const data = await response.json()
    throw data
}

const intitalState = {};

export default function reducer(state = intitalState, action) {
    let newState;
    switch(action.type) {
        case LOAD_MATCHES:
            newState = {...state, ...action.payload}
            return newState
        case ADD_MATCH:
            let newMatchId = action.payload.id
            let newMatchType = action.payload.type
            newState = {...state}
            newState[newMatchType][newMatchId] = action.payload
            return newState
        default:
            return state
    }
}
