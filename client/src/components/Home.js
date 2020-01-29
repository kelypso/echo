import React from 'react'
//import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            {/* <span className="navLinks">
                <NavLink exact activeClassName="active" to="/signup" className="nav firstNav">Sign Up</NavLink>
                <NavLink exact activeClassName="active" to="/login" className="nav secondNav">Login</NavLink>
            </span> */}
            <br/><br/>
            <h2><strong>Welcome to ECHO</strong></h2>
            <p className="tagline">ECHO provides a simple platform where pilots can efficiently log their flights.</p><br/><br/>
        </div>
    )
}

export default Home