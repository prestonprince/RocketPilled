// constants
const LOAD_TEAMS = '/teams/LOAD_TEAMS';
const ADD_TEAM = 'teams/ADD_TEAM'

const loadTeams = (payload) => ({
    type: LOAD_TEAMS,
    payload
})

const addTeam = (payload) => ({
    type: ADD_TEAM,
    payload
})

const normalize = (arr) => {
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
        console.log(data);
        return data;
    };

    throw response;
}

const initialState = {}

export default function reducer(state = initialState, action) {
    let newState = {...state};
    switch (action.type) {
        case LOAD_TEAMS:
            newState = {...state, ...action.payload}
            return newState
        default:
            return state
    }
}
