import {resetLoginForm} from './login'
//import {resetSignupForm} from './signupForm'
//import {getUserFlights, clearFlights} from './flights'

// Synchronous action creators 
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

// Asynch action creators
export const login = (credentials, history)=> {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/login", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                //dispatch(getUserFlights())
                //dispatch(resetLoginForm())
                history.push("/flights")
            }
        })
        .catch(console.log)
    }
}

export const signup = (credentials, history) => {
    return dispatch => {
      const userData = {
        user: credentials
      }
      return fetch("http://localhost:3001/api/v1/signup", {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                //dispatch(getUserFlights())
                //dispatch(resetSignupForm())
                history.push("/")
            }
        })
        .catch(console.log)
    }
  }

export const logout = () => {
    return dispatch => {
      dispatch(clearCurrentUser())
      //dispatch(clearFlights())
      return fetch("http://localhost:3001/api/v1/logout", {
        credentials: "include",
        method: "DELETE"
      })
    }
  }

export const getCurrentUser = () => {
    return dispatch => {
      return fetch("http://localhost:3001/api/v1/get_current_user", {
        credentials: "include",
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(resp => resp.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                //dispatch(getUserFlights())
            }
        })
        .catch(console.log)
    }
}