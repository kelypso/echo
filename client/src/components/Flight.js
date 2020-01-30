import React from 'react'
import {Link} from 'react-router-dom'

const Flight = ({flight}) => {
    return (
        flight ?
            <div className="FlightCard">
                <h2><Link className="flight-details" to={`/flights/${flight.id}`} key={flight.id}>{flight.attributes.date}</Link></h2>
                {/* <p className="tripCategory">{trip.attributes.category}</p>
                <p className="tripDuration">{trip.attributes.duration}</p>
                <Link to={`/trips/${trip.id}/edit`} className="nav userLink">Edit</Link> */}
            </div> :
        <p>Flight could not be found.</p>
    )
}

export default Flight