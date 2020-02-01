import React from 'react'
import {connect} from 'react-redux'
import FlightCard from '../components/FlightCard'

const FlightLog = ({flights}) => {
    const flightLog = flights.length > 0 ? flights.map(f => <FlightCard flight={f} key={f.id} />) : null
    return (
        <div className="FlightLog">
            {flightLog}
        </div> 
    )
}

const mapStateToProps = ({flights}) => {
    return {
      flights
    }
}

export default connect(mapStateToProps)(FlightLog)