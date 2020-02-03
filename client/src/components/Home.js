import React from 'react'
import {NavLink} from 'react-router-dom'

const Home = () => {
    return (
        <div className="Home">
            <span className="NavBar">
                <NavLink exact to="/" className="nav-link" activeClassName="selected-tab">
                    <span className="link-title">Home</span>
                </NavLink>
                <NavLink to="/signup" className="nav-link" activeClassName="selected-tab">
                    <span className="link-title">Sign Up</span>
                </NavLink>
                <NavLink to="/login" className="nav-link" activeClassName="selected-tab">
                    <span className="link-title">Log In</span>
                </NavLink>
            </span>
            <br/><br/>
            {/* <h2 className="home-greeting">Welcome to ECHO</h2> */}
            <img src={require("../images/logo.png")} alt="ECHO" className="home-greeting" />
            <p className="tagline">A logbook application for aviators.</p>
        </div>
    )
}

export default Home