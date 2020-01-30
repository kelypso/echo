// Synchronous action creators 
export const setUserFlights = flights => {
    return {
        type: "SET_USER_FLIGHTS",
        flights
    }
}

export const clearFlights = () => {
    return {
        type: "CLEAR_FLIGHTS"
    }
}

export const addFlight = flight => {
    return {
        type: "ADD_FLIGHT",
        flight
    }
}

// Asynch action creators
const api_url = "http://localhost:3001/api/v1"

export const getUserFlights = () => {
    return dispatch => {
        return fetch(`${api_url}/flights`, {
        credentials: "include",
        method: "GET",
        headers: {"Content-Type": "application/json"}
      })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.error) {
                alert(resp.error)
            } else {
                dispatch(setUserFlights(resp.data))
            }
        })
        .catch(error => {return error})
    }
}