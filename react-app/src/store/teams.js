import { removeUserTeam, addUserTeam, authenticate } from "./session";

// constants
const LOAD_TEAMS = '/teams/LOAD_TEAMS';
const ADD_TEAM = 'teams/ADD_TEAM';
const REMOVE_TEAM = 'teams/REMOVE_TEAM'

const loadTeams = (payload) => ({
    type: LOAD_TEAMS,
    payload
})

const addTeam = (payload) => ({
    type: ADD_TEAM,
    payload
});

const removeTeam = (payload) => ({
    type: REMOVE_TEAM,
    payload
})

export const normalize = (arr) => {
    const dataObj = {};
    arr.forEach(obj => {
        dataObj[obj.id] = obj
    });
    return dataObj
}

// thunks
export const getAllTeams = () => async(dispatch) => {
    const response = await fetch('/api/teams', {
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        const data = await response.json()
        const soloTeams = normalize(data.teams.solo)
        const duoTeams = normalize(data.teams.duo)
        const squadTeams = normalize(data.teams.squad)
        const dataObj = {Solo: soloTeams, Duo: duoTeams, Squad: squadTeams}
        dispatch(loadTeams(dataObj))
        return data
    }
    throw response
};

export const createTeam = (team) => async(dispatch) => {
    const response = await fetch('/api/teams', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(team)
    });

    if (response.ok) {
        const data = await response.json();
        await dispatch(addUserTeam(data))
        dispatch(addTeam(data))
        return data;
    };

    throw response;
};

export const deleteTeam = (team) => async(dispatch) => {
    const response = await fetch(`/api/teams/${team.id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    });
    
    if (response.ok) {
        const data = await response.json();
        await dispatch(removeTeam(team));
        dispatch(removeUserTeam(team));
        return data
    }
    const data = await response.json()
    throw data
};

export const addTeamMember = (userId, teamId) => async(dispatch) => {
    const response = await fetch(`/api/teams/${teamId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user_id: userId })
    });

    if (response.ok) {
        const data = await response.json();
        await dispatch(getAllTeams());
        await dispatch(authenticate())
        return data
    };
    const data = await response.json();
    return data
}

export const removeTeamMember = (userId, team) => async(dispatch) => {
    const teamId = team.id
    const response = await fetch(`/api/teams/${teamId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ user_id: userId })
    });

    if (response.ok) {
        const data = await response.json();
        await dispatch(getAllTeams());
        dispatch(removeUserTeam(team))
        return data
    };
    throw response;
}

const initialState = {};

export default function reducer(state = initialState, action) {
    let newState = {...state};
    switch (action.type) {
        case LOAD_TEAMS:
            newState = {...state, ...action.payload}
            return newState
        case ADD_TEAM:
            const id = action.payload.id
            const type =action.payload.type
            newState[type][id] = action.payload
            return newState
        case REMOVE_TEAM:
            const removeId = action.payload.id;
            const removeType = action.payload.type;
            delete newState[removeType][removeId];
        default:
            return state
    }
}
