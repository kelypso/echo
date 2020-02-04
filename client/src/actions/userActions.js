import {resetLoginForm} from './loginActions'
import {resetSignupForm} from './signupActions'
import {getUserFlights, clearFlights} from './flightActions'

// Synchronous action creators (returns js obj)
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER",
  }
}

// Asynch action creators (returns dispatch fn to fetch from api)
const api_url = "http://localhost:3001/api/v1"

export const login = (user, history) => {
  return dispatch => {
    return fetch(`${api_url}/login`, {
      credentials: "include",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(user)
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
          history.push("/login")
        } else {
          dispatch(setCurrentUser(resp.data))
          dispatch(getUserFlights())
          history.push("/flights")
          dispatch(resetLoginForm())
        }
      })
      .catch(error => {return error})
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearFlights())
    return fetch(`${api_url}/logout`, {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const signup = (user, history) => {
  return dispatch => {
    const userData = {
      user
    }
    return fetch(`${api_url}/signup`, {
      credentials: "include",
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(userData)
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
          history.push("/signup")
        } else {
          dispatch(setCurrentUser(resp.data))
          dispatch(getUserFlights())
          history.push("/")
          dispatch(resetSignupForm())
        }
      })
      .catch(error => {return error})
  }
}

export const findUser = () => {
  return dispatch => {
    return fetch(`${api_url}/find_user`, {
      credentials: "include",
      method: "GET",
      headers: {"Content-Type": "application/json"}
    })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(setCurrentUser(resp.data))
          dispatch(getUserFlights())
        }
      })
      .catch(error => {return error})
  }
}