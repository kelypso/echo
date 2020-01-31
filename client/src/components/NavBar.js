import React, {Component} from 'react'
import {NavLink} from "react-router-dom"
import Logout from './Logout'

class NavBar extends Component {

  render() {
    let userNav
    let user = this.props.user

    if (user !== null && user.id) {
      userNav = (
        <>
          <NavLink to={"/flights"} className="nav-link" activeClassName="selected-tab">
            <span className="link-title">Logbook</span>
          </NavLink>
          <NavLink to={"/" + user.username} className="nav-link" activeClassName="selected-tab">
            <span className="link-title">Log New Flight</span>
          </NavLink>
          <Logout />
        </>
      )
    } else {
      userNav = (
        <>
          <NavLink exact to="/" className="nav-link" activeClassName="selected-tab">
            <span className="link-title">Home</span>
          </NavLink>
          <NavLink to="/signup" className="nav-link" activeClassName="selected-tab">
            <span className="link-title">Sign Up</span>
          </NavLink>
          <NavLink to="/login" className="nav-link" activeClassName="selected-tab">
            <span className="link-title">Log In</span>
          </NavLink>
        </>
      )
    }

    return(
      <div className="NavBar">
        {userNav}
      </div>
    )
  }

}

export default NavBar
