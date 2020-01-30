import React, {Component}  from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/userActions'

class SignUp extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            username: "",
            password: ""
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.signup(this.state);
        this.props.history.push('/');
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <h2 className="account-greeting">Sign Up</h2><br/>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} placeholder="name" className="account-form" /><br/><br/>
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="email" className="account-form" /><br/><br/>
                    <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="username" className="account-form" /><br/><br/>
                    <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password" className="account-form" /><br/>
                <br/><input type="submit" value="Sign Up" className="form-button" />
            </form>
    )
  }
}

export default connect(null, {signup})(SignUp);
