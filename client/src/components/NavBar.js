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
            <span className="tab-title">Logbook</span>
          </NavLink>
          <NavLink to="/logout" className="nav-link" activeClassName="selected-tab">
            <span className="tab-title">Logout</span>
          </NavLink>
        </>
      )
    } else {
      userNav = (
        <>
          <NavLink to="/signup" className="nav-link" activeClassName="selected-tab">
            <span className="tab-title">Sign Up</span>
          </NavLink>
          <NavLink to="/login" className="nav-link" activeClassName="selected-tab">
            <span className="tab-title">Log In</span>
          </NavLink>
        </>
      )
    }

    return(
      <div className="NavBar">
        <NavLink to="/search" className="nav-link" activeClassName="selected-tab">
          <span className="tab-title">Search</span>
        </NavLink>
        <NavLink to="/about" className="nav-link" activeClassName="selected-tab">
          <span className="tab-title">About</span>
        </NavLink>
        <NavLink exact to="/" className="nav-link" activeClassName="selected-tab">
          <span className="app-title">ECHO</span>
        </NavLink>
        {userNav}
      </div>
    )
  }

}

export default NavBar;
