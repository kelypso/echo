import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class NavBar extends Component {

  render() {
    let userNav
    let user = this.props.user

    if (user !== null && user.id) {
      userNav = (
        <>
          <NavLink to={"/" + user.username} className="nav-link" activeClassName="selected-tab">
            <span className="link-title">Logbook</span>
          </NavLink>
          <NavLink to="/logout" className="nav-link" activeClassName="selected-tab">
            <span className="link-title">Logout</span>
          </NavLink>
        </>
      )
    } else {
      userNav = (
        <>
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
        <NavLink exact to="/" className="nav-link" activeClassName="selected-tab">
          <span className="link-title">Home</span>
        </NavLink>
        {userNav}
      </div>
    )
  }

}

export default NavBar;
