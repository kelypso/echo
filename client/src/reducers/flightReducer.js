const initialState = []

export default (state=initialState, action) => {
    switch (action.type) {
        case "SET_USER_FLIGHTS":
            return action.flights
        case "ADD_FLIGHT":
            return state.concat(action.flight)
        case "CLEAR_FLIGHTS":
            return initialState
        case "UPDATE_FLIGHT":
            return state.map(f => f.id === action.flight.id ? action.flight : f)
        case "DELETE_FLIGHT":
            return state.filter(f => f.id === action.flightId ? false : true)
        default:
            return state
    }
}