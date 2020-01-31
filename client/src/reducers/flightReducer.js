const initialState = []

export default (state=initialState, action) => {
    switch (action.type) {
        case "SET_USER_FLIGHTS":
            return action.flights
        case "ADD_FLIGHT":
            return state.concat(action.flight)
        case "UPDATE_FLIGHT_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_FLIGHT_FORM":
            return initialState
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