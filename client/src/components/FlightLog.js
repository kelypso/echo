import React, {Component} from 'react'
import FlightCard from './FlightCard.js'

class FlightLog extends Component {

  render() {
    const flights = this.props.flights
    const flightCards = flights.length > 0 ? flights.map(f => <FlightCard flight={f} key={f.id} />) : null

    return (
      flightCards
    )
  }
}

export default (FlightLog)
