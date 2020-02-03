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
            <br/><br/>
            <input type="text" name="name" onChange={handleChange} value={name} placeholder="Name" className="form" /><br/><br/>
            <input type="text" name="email" onChange={handleChange} value={email} placeholder="Email" className="form" /><br/><br/>
            <input type="text" name="username" onChange={handleChange} value={username} placeholder="Username" className="form" /><br/><br/>
            <input type="password" name="password" onChange={handleChange} value={password} placeholder="Password" className="form" /><br/><br/>
            <input type="submit" value="Sign Up" className="form-button" />
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupData: state.signup
    }
}

export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)
