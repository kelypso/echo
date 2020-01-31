import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout.js'

const NavBar = ({user}) => {
    return (
        <div className="NavBar">
          <>
            <NavLink to={"/flights"} className="nav-link" activeClassName="selected-tab">
              <span className="link-title">Logbook</span>
            </NavLink>
            <NavLink to={"/" + user.username} className="nav-link" activeClassName="selected-tab">
              <span className="link-title">Log New Flight</span>
            </NavLink>
            <Logout />
          </>
          <h2 className="account-greeting"><strong>{user.attributes.name}'s Logbook</strong></h2>
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {
      user,
    }
}

export default connect(mapStateToProps)(NavBar)