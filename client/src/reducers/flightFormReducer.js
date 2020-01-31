const initialState = {
    date: "",
    aircraft_id: "",
    departure: "",
    arrival: "",
    duration: ""
}

export default (state=initialState, action) => {
    switch (action.type) {
        case "UPDATE_FLIGHT_FORM":
            return {
                ...state,
                [action.formData.name]: action.formData.value
            }
        case "RESET_FLIGHT_FORM":
            return initialState
        case "SET_EDIT_FLIGHT_FORM":
            return action.formData
        default: 
            return state
    }
}