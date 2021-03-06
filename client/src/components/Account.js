import React from 'react'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Logout from './Logout'

const Account = ({user}) => {
    return (
        <div className="Account">
          <div className="NavBar">
            <NavLink exact to={"/flights"} className="nav-link" activeClassName="selected-tab">
              <span className="link-title">Logbook</span>
            </NavLink>
            <NavLink exact to={"/flights/new"} className="nav-link" activeClassName="selected-tab">
              <span className="link-title">Add Flight</span>
            </NavLink>
            <Logout />
          </div>
          <img src={require("../images/logo-sm.png")} alt="ECHO" className="account-logo" />
          <h2 className="account-greeting">{user.attributes.name}'s Logbook</h2>
        </div>
    )
}

const mapStateToProps = ({user}) => {
    return {
      user
    }
}

export default connect(mapStateToProps)(Account)