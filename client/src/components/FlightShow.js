import React from 'react'
import {Link} from 'react-router-dom'

const FlightShow = ({flight}) => {
    return (
        flight ?
            <div className="FlightShow">
                <h2 className="flight-date">{flight.attributes.date}</h2>
                <h3 className="flight-route">{flight.attributes.departure} - {flight.attributes.arrival}</h3>
                <div className="show-aircraft">
                    <p className="flight-details"><span className="show-label">AIRCRAFT: </span><br/>{flight.attributes.aircraft} #N{flight.attributes.aircraft_id}</p>
                    <p className="flight-details"><span className="show-label">CATEGORY / CLASS: </span><br/>{flight.attributes.classification}</p>
                    <p className="flight-details"><span className="show-label">PILOT TYPE: </span><br/>{flight.attributes.position}</p>
                    <p className="flight-details"><span className="show-label">FLIGHT DURATION: </span><br/>{flight.attributes.duration} hrs</p>
                    <p className="flight-details"><span className="show-label">CONDITIONS: </span><br/>{flight.attributes.conditions}</p>
                    <p className="flight-details"><span className="show-label">LANDINGS / TYPE: </span><br/>{flight.attributes.landings}</p>
                    <p className="flight-details"><span className="show-label">GROUND TRAINING: </span><br/>{flight.attributes.ground} hrs</p>
                    <p className="flight-details"><span className="show-label">REMARKS: </span><br/>{flight.attributes.remarks}</p><br/>
                    <Link to={`/flights/${flight.id}/edit`} className="edit-link">Edit</Link>
                </div>
            </div> :
        <p>Flight could not be found.</p>
    )
}

export default FlightShow