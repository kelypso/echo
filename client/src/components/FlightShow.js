import React from 'react'

const FlightShow = ({flight}) => {
    return (
        flight ?
            <div className="FlightShow">
                <h2 className="flight-date">{flight.attributes.date}</h2>
                <p className="flight-details"><span className="show-label">ROUTE: </span>{flight.attributes.departure} - {flight.attributes.arrival}</p>
                <p className="flight-details"><span className="show-label">AIRCRAFT: </span>{flight.attributes.aircraft} No. {flight.attributes.aircraft_id}</p>
                <p className="flight-details"><span className="show-label">CATEGORY / CLASS: </span>{flight.attributes.classification}</p>
                <p className="flight-details"><span className="show-label">PILOT TYPE: </span>{flight.attributes.position}</p>
                <p className="flight-details"><span className="show-label">FLIGHT DURATION: </span>{flight.attributes.duration} hrs</p>
                <p className="flight-details"><span className="show-label">CONDITIONS: </span>{flight.attributes.conditions}</p>
                <p className="flight-details"><span className="show-label">LANDINGS / TYPE: </span>{flight.attributes.landings} landing(s)</p>
                <p className="flight-details"><span className="show-label">GROUND TRAINING: </span>{flight.attributes.ground} hrs ground training</p>
                <p className="flight-details"><span className="show-label">REMARKS: </span>{flight.attributes.remarks}</p>
            </div> :
        <p>Flight could not be found.</p>
    )
}

export default FlightShow