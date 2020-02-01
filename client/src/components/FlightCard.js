import React from 'react'
import {Link} from 'react-router-dom'

const FlightCard = ({flight}) => {
    return (
        flight ?
            <div className="FlightCard">
                <h3><Link to={`/flights/${flight.id}`} className="card-link card-date" key={flight.id}>{flight.attributes.date}</Link></h3>
                <p className="card-details">{flight.attributes.departure} - {flight.attributes.arrival}</p>
                <p className="card-details">{flight.attributes.aircraft} #{flight.attributes.aircraft_id}</p>
                <Link to={`/flights/${flight.id}/edit`} className="card-link card-edit">Edit</Link>
            </div> :
        <p>Flight could not be found.</p>
    )
}

export default FlightCard