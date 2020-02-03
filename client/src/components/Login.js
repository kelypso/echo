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
        history.push("/flights")
    }

    return (
        <form onSubmit={handleSubmit}>
            <br/><br/>
            <input type="text" name="username" onChange={handleChange} value={username} placeholder="Username" className="form" /><br/><br/>
            <input type="password" name="password" onChange={handleChange} value={password} placeholder="Password" className="form" /><br/>
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