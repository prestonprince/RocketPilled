// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';
const REMOVE_USER_TEAM = 'session/REMOVE_USER_TEAM';
const ADD_USER_TEAM ='session/ADD_USER_TEAM';
const SET_ALL_USERS = 'session/SET_ALL_USERS';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

export const removeUserTeam = (payload) => ({
  type: REMOVE_USER_TEAM,
  payload
})

export const addUserTeam = (payload) => ({
  type: ADD_USER_TEAM,
  payload
})

const setAllUsers = (payload) => ({
  type: SET_ALL_USERS,
  payload
})

const initialState = { user: null, allUsers: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }
  
    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });
  
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  
  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
};

export const getAllUsers = () => async(dispatch) => {
  const response = await fetch('/api/users/', {
    headers: {
      "Content-Type": "application/json"
    }
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setAllUsers(data.users))
  }
}

// export const getUser = (userId) => async(dispatch) => {
//   const response = await fetch(`/api/user/${userId}`, {
//     headers: {
//       "Content-Type": 'application/json'
//     }
//   });
// }

export const postTicket = ({ matchId, userId, screenshotLink, description }) => async(dispatch) => {
  const response = await fetch('/api/tickets', {
    method: "POST",
    headers: {
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      match_id: matchId,
      user_id: userId,
      screenshot_link: screenshotLink,
      description
    })
  });

  if (response.ok) {
    const data = await response.json()
    console.log(data);

    await dispatch(authenticate())

    return data
  }
  const err = response.json()
  console.log('ERROR', err)
  throw err
}

export default function reducer(state = initialState, action) {
  let newState = {...state};
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case SET_ALL_USERS:
      newState.allUsers = action.payload;
      return newState;
    case REMOVE_USER:
      return { user: null }
    case ADD_USER_TEAM:
      let addType = action.payload.type;
      let addId = action.payload.id;
      newState.user[addType][addId] = action.payload
      return newState
    case REMOVE_USER_TEAM:
      let type = action.payload.type
      let id = action.payload.id
      delete newState.user[type][id]
    default:
      return state;
  }
}
