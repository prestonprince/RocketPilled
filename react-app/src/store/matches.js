import { normalize } from "./teams";
import { authenticate } from "./session";

//constants
const LOAD_MATCHES = '/matches/LOAD_MATCHES';
const ADD_MATCH = '/matches/ADD_MATCH';
const REMOVE_MATCH = '/matches/REMOVE_MATCH';
const UPDATE_TO_PENDING = '/matches/UPDATE_TO_PENDING';

const loadMatches = (payload) => ({
    type: LOAD_MATCHES,
    payload
})

const addMatch = (payload) => ({
    type: ADD_MATCH,
    payload
});

const removeMatch = (payload) => ({
    type: REMOVE_MATCH,
    payload
});

const updateToPending = (payload) => ({
    type: UPDATE_TO_PENDING,
    payload
});

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
    const response = await fetch('/api/matches', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(match)
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(addMatch(data))
        return data
    }
    const data = await response.json()
    throw data
};

export const acceptMatch = (teamId, matchId) => async(dispatch) => {
    const response = await fetch(`/api/matches/${matchId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            status: "pending",
            team_id: teamId
        })
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(updateToPending(data));
        await dispatch(authenticate())
        return data
    }
    const data = await response.json()
    throw data
}

export const cancelMatch = (match, teamId) => async(dispatch) => {
    const { id } = match
    const response = await fetch(`/api/matches/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({team_id: teamId})
    });

    if (response.ok) {
        const data = await response.json();
        dispatch(removeMatch(match))
        return data
    };
    const data = await response.json()
    throw data
}

const intitalState = {Solo: {}, Duo: {}, Squad: {}};

export default function reducer(state = intitalState, action) {
    let newState;
    let type, id
    switch(action.type) {
        case LOAD_MATCHES:
            newState = {...state, ...action.payload}
            return newState
        case ADD_MATCH:
            id = action.payload.id;
            type = action.payload.type;

            newState = {...state}
            newState[type][id] = action.payload
            return newState
        case UPDATE_TO_PENDING:
            id = action.payload.id;
            type = action.payload.type;

            newState = { ...state };
            newState[type][id] = action.payload;
            return newState
        case REMOVE_MATCH:
            id = action.payload.id
            type = action.payload.type

            newState = { ...state };
            delete newState[type][id];
            return newState;
        default:
            return state
    }
}
