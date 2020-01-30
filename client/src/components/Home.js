import React from 'react'
//import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            {/* <span className="navLinks">
                <NavLink exact activeClassName="active" to="/signup" className="nav firstNav">Sign Up</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav secondNav">Login</NavLink>
            </span> */}
            <h2 className="home-greeting"><strong>Welcome to ECHO</strong></h2>
            <p className="tagline">ECHO provides an efficient platform where pilots can maintain a digital flight logbook.</p><br/><br/>
        </div>
    )
}

export default Home