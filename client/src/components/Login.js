import React from 'react'
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginActions'
import {login} from '../actions/userActions'

const Login = ({loginData, updateLoginForm, login, history}) => {
    const {username, password} = loginData

    const handleChange = e => {
        const {name, value} = e.target
        updateLoginForm(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(loginData)
        history.push("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="account-greeting">Log In</h2><br/>
            <input type="text" name="username" onChange={handleChange} value={username} placeholder="username" className="account-form" /><br/><br/>
            <input type="password" name="password" onChange={handleChange} value={password} placeholder="password" className="account-form" /><br/>
            <br/><input type="submit" value="Log In" className="form-button" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginData: state.login
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)