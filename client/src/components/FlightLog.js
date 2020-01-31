import React from 'react'
import {connect} from 'react-redux'
import FlightCard from './FlightCard'

const FlightLog = ({flights}) => {
    const flightLog = flights.length > 0 ? flights.map(f => <FlightCard flight={f} key={f.id} />) : null
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