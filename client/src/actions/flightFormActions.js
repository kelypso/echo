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
        aircraft: flight.attributes.aircraft,
        aircraft_id: flight.attributes.aircraft_id,
        arrival: flight.attributes.arrival,
        departure: flight.attributes.departure,
        classification: flight.attributes.classification,
        position: flight.attributes.position,
        duration: flight.attributes.duration,
        conditions: flight.attributes.conditions,
        ground: flight.attributes.ground,
        landings: flight.attributes.landings,
        remarks: flight.attributes.remarks
    }
    return {
        type: "SET_EDIT_FLIGHT_FORM",
        formData
    }
}