import React from 'react'
import {connect} from 'react-redux'
import {updateFlightForm} from '../actions/flightFormActions'

const FlightForm = ({flightData, userId, updateFlightForm, handleSubmit, editMode}) => {
    const {date, aircraft, aircraft_id, departure, arrival, classification, position, 
            duration, conditions, ground, landings, remarks} = flightData

    const handleChange = e => {
        const {name, value} = e.target
        updateFlightForm(name, value)
    }

    return (
        <div className="FlightForm">
            <form onSubmit={e => {
                e.preventDefault()
                handleSubmit(flightData)
            }}>
            <input type="date" name="date" onChange={handleChange} value={date} className="form-input" /><br/><br/>
            <input type="text" name="aircraft" onChange={handleChange} value={aircraft} placeholder="Aircraft" className="form-input" /><br/><br/>
            <input type="text" name="aircraft_id" onChange={handleChange} value={aircraft_id} placeholder="Aircraft ID" className="form-input" /><br/><br/>
            <input type="text" name="departure" onChange={handleChange} value={departure} placeholder="Departure" className="form-input" /><br/><br/>
            <input type="text" name="arrival" onChange={handleChange} value={arrival} placeholder="Arrival" className="form-input" /><br/><br/>
            <input type="text" name="classification" onChange={handleChange} value={classification} placeholder="Aircraft Class" className="form-input" /><br/><br/>
            <input type="text" name="position" onChange={handleChange} value={position} placeholder="Piloting Type" className="form-input" /><br/><br/>
            <input type="text" name="duration" onChange={handleChange} value={duration} placeholder="Flight Duration" className="form-input" /><br/><br/>
            <input type="text" name="conditions" onChange={handleChange} value={conditions} placeholder="Conditions" className="form-input" /><br/><br/>
            <input type="text" name="ground" onChange={handleChange} value={ground} placeholder="Ground Training" className="form-input" /><br/><br/>
            <input type="text" name="landings" onChange={handleChange} value={landings} placeholder="No. Landings & Type" className="form-input" /><br/><br/>
            <textarea rows="4" cols="20" name="remarks" onChange={handleChange} value={remarks} placeholder="Remarks" className="form-input" /><br/>
            <br/><input type="submit" value={editMode ? "Edit Flight" : "Add Flight"} className="form-button" />
        </form>
        </div>
    )
}

const mapStateToProps = state => {
    const userId = state.user ? state.user.id : ""
    return {
        flightData: state.flights,
        userId
    }
}

export default connect(mapStateToProps, {updateFlightForm})(FlightForm)