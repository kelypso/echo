import React from 'react'
import {connect} from 'react-redux'
import FlightForm from '../components/FlightForm'
import {createFlight} from '../actions/flightActions'

const NewFlight = ({createFlight, history}) => {

    const handleSubmit = (flightData, userId) => {
        createFlight({
            ...flightData, 
            userId
        }, history)
    }
    
    return (
        <div className="NewFlight">
            <br/><br/><FlightForm handleSubmit={handleSubmit} history={history} /><br/>
        </div>
    )
}

export default connect(null, {createFlight})(NewFlight)