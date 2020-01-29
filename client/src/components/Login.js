import React from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/user'
//import {updateLoginForm} from '../actions/loginForm'

const Login = ({loginData, updateLoginForm, login, history}) => {
    const {username, password} = loginData

    const handleChange = e => {
        const {name, value} = e.target
        updateLoginForm(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        login(loginData, history)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" onChange={handleChange} value={username} placeholder="username" className="formInput" /><br/><br/>
            <input type="password" name="password" onChange={handleChange} value={password} placeholder="password" className="formInput" /><br />
            <br/><input type="submit" value="Login" className="formBtn" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login})(Login)