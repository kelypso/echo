import React from 'react'
import {connect} from 'react-redux'
import FlightForm from '../components/FlightForm'
import {createFlight} from '../actions/flightActions'

const NewFlightContainer = ({createFlight, history}) => {

    const handleSubmit = (flightData, userId) => {
        createFlight({
            ...flightData, 
            userId
        }, history)
    }
    
    return (
        <div className="NewFlightContainer">
            <br/><br/><FlightForm handleSubmit={handleSubmit} history={history} /><br/>
        </div>
    )
}

export default connect(null, {createFlight})(NewFlightContainer)