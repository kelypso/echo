import React from 'react'
import {connect} from 'react-redux'
import Flight from './Flight'

const FlightLog = ({flights}) => {
    const flightLog = flights.length > 0 ? flights.map(f => <Flight flight={f} key={f.id} />) : null
    return (
        flightLog
    )
}

const mapStateToProps = ({flights}) => {
    return {
      flights
    }
}

export default connect(mapStateToProps)(FlightLog)