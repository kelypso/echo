// Synchronous action creators 
export const updateFlightForm = (name, value) => {
    return {
        type: "UPDATE_FLIGHT_FORM",
        formData: {name, value}
    }
}

export const resetFlightForm = () => {
    return {
        type: "RESET_FLIGHT_FORM"
    }
}

export const setEditFlightForm = flight => {
    const formData = {
        name: flight.attributes.name,
        category: flight.attributes.category,
        duration: flight.attributes.duration
    }
    return {
        type: "SET_EDIT_FLIGHT_FORM",
        formData
    }
}