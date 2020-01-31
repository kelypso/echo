import React from 'react'

const FlightShow = ({flight}) => {
    return (
        flight ?
            <div className="FlightShow">
                <h2>{flight.attributes.date}</h2>
                <p className="flight-details main">{flight.attributes.departure} - {flight.attributes.arrival}</p>
                <p className="flight-details main">{flight.attributes.aircraft} / {flight.attributes.aircraft_id}</p>
                <p className="flight-details italic">{flight.attributes.classification} / {flight.attributes.position}</p>
                <p className="flight-details">{flight.attributes.aircraft} / {flight.attributes.aircraft_id}</p>
                <p className="flight-details">{flight.attributes.duration} hrs in {flight.attributes.conditions} conditions</p>
                <p className="flight-details">{flight.attributes.landings} landing(s)</p>
                <p className="flight-details">{flight.attributes.ground} hrs ground training</p>
                <p className="flight-details">{flight.attributes.remarks}</p>
            </div> :
        <p>Flight could not be found</p>
    )
}

export default FlightShow