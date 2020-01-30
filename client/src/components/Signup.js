import React from 'react'
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupActions.js'
import {signup} from '../actions/userActions.js'

const Signup = ({signupData, updateSignupForm, signup, history}) => {
    const {name, email, username, password} = signupData

    const handleChange = e => {
        const {name, value} = e.target
        updateSignupForm(name, value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        signup(signupData)
        history.push("/")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2 className="account-greeting">Sign Up</h2><br/>
                <input type="text" name="name" onChange={handleChange} value={name} placeholder="name" className="account-form" /><br/><br/>
                <input type="text" name="email" onChange={handleChange} value={email} placeholder="email" className="account-form" /><br/><br/>
                <input type="text" name="username" onChange={handleChange} value={username} placeholder="username" className="account-form" /><br/><br/>
                <input type="password" name="password" onChange={handleChange} value={password} placeholder="password" className="account-form" /><br/>
            <br/><input type="submit" value="Sign Up" className="form-button" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupData: state.signup
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)
