import React from 'react'
import {connect} from 'react-redux'
import {NavLink, withRouter} from 'react-router-dom'
import {logout} from '../actions/userActions'

const Logout = ({logout, history}) => {

    const handleClick = e => {
        e.preventDefault()
        logout()
        history.push("/")
    }

    return (
        <NavLink onClick={handleClick} to="/" className="nav-link">
            <span className="link-title">Logout</span>
        </NavLink>
    )
}

export default withRouter(connect(null, {logout})(Logout))