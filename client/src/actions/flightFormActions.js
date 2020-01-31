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
        date: flight.attributes.date,
        aircraft_id: flight.attributes.aircraft_id,
        departure: flight.attributes.departure,
        arrival: flight.attributes.arrival,
        duration: flight.attributes.duration
    }
    return {
        type: "SET_EDIT_FLIGHT_FORM",
        formData
    }
}