import React, {Component} from 'react'
import {connect} from 'react-redux'
import {login} from '../actions/userActions'

class Login extends Component {

    constructor() {
        super()
        this.state = {
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
        this.props.login(this.state);
        this.props.history.push('/');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h2 className="account-greeting"><strong>Log In</strong></h2><br/>
                <input type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="username" className="account-form" /><br/><br/>
                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="password" className="account-form" /><br />
                <br/><input type="submit" value="Log In" className="form-btn" />
            </form>
        )
    }

}

export default connect(null, {login})(Login);
