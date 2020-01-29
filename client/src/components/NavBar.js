import React from 'react'
import {connect} from 'react-redux'
//import {NavLink} from 'react-router-dom'
//import Logout from './Logout'

const NavBar = ({user, loggedIn}) => {
    return (
        <div className="NavBar">
            {/* <span className="navLinks">
                <NavLink exact activeClassName="active" to="/trips" className="nav firstNav">All Trips</NavLink>
                <NavLink exact activeClassName="active" to="/trips/new" className="nav secondNav">New Trip</NavLink>
                <Logout />
            </span> */}
            <h2 className="userWelcome"><strong>{user.attributes.name}'s Logbook</strong></h2>
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {
      user,
      loggedIn: !!user
    }
}

export default connect(mapStateToProps)(NavBar)