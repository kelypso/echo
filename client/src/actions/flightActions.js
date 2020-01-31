import {resetFlightForm} from './flightFormActions'

// Synchronous action creators 
export const setUserFlights = flights => {
    return {
        type: "SET_USER_FLIGHTS",
        flights
    }
}

export const addFlight = flight => {
    return {
        type: "ADD_FLIGHT",
        flight
    }
}

export const editFlight = flight => {
    return {
        type: "UPDATE_FLIGHT",
        flight
    }
}

export const destroyFlight = flightId => {
    return {
        type: "DELETE_FLIGHT",
        flightId
    }
}

export const clearFlights = () => {
    return {
        type: "CLEAR_FLIGHTS"
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

export const createFlight = (flightData, history) => {
    return dispatch => {
        const flightBody = {
            flight: {
                date: flightData.date,
                aircraft_id: flightData.aircraft_id,
                departure: flightData.departure,
                arrival: flightData.arrival,
                duration: flightData.duration,
                user_id: flightData.userId
            }
        }
        return fetch(`${api_url}/flights`, {
            credentials: "include",
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(flightBody)
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(addFlight(resp.data))
                    dispatch(resetFlightForm())
                    history.push(`/flights/${resp.data.id}`)
                }
            })
            .catch(error => {return error})
    }
}

export const updateFlight = (flightData, history) => {
    return dispatch => {
        const flightBody = {
            flight: {
                date: flightData.date,
                aircraft_id: flightData.aircraft_id,
                departure: flightData.departure,
                arrival: flightData.arrival,
                duration: flightData.duration,
                user_id: flightData.userId
            }
        }
        return fetch(`${api_url}/flights/${flightData.flightId}`, {
            credentials: "include",
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(flightBody)
        })
            .then(resp => resp.json())
            .then(resp => {
                if (resp.error) {
                    alert(resp.error)
                } else {
                    dispatch(editFlight(resp.data))
                    history.push(`/flights/${resp.data.id}`) // move to comp??
                }
            })
            .catch(error => {return error})
    }
}