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

export const login = user => {
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
        } else {
          dispatch(setCurrentUser(resp.data))
          //dispatch(getUserFlights())
          //dispatch(resetLoginForm()) is this needed with local state?
        }
      })
        .catch(error => {return error})
  }
}

export const logout = () => {
  return dispatch => {
    dispatch(clearCurrentUser())
    //dispatch(clearFlights())
    return fetch(`${api_url}/logout`, {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const signup = (user, history) => {
    return dispatch => {
      const userData = {
        user //can I deconstruct here? Can I just use user in body? TEST!
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
            } else {
                dispatch(setCurrentUser(resp.data))
                //dispatch(getUserFlights())
                //dispatch(resetSignupForm())
                history.push("/")
            }
        })
        .catch(error => {return error})
    }
  }

export const findUser = (user) => {
  return dispatch => {
    return fetch(`${api_url}/${user}`, {
      method: "GET",
      credentials: "include",
      headers: {"Content-Type": "application/json"}
    })
      .then(resp => resp.json())
      .then(resp => console.log(resp))
      .catch(error => {return error})
  }
}

export const getCurrentUser = () => {
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
                //dispatch(getUserFlights())
            }
        })
        .catch(console.log)
    }
}