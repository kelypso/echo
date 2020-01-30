import React, {Component}  from 'react'
import {connect} from 'react-redux'
import {signup} from '../actions/userActions'

class SignUp extends Component {

    constructor() {
        super();
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
            <div className="SignUp">
            <h2 className="account-greeting">Sign Up</h2><br/>
            <br/>
            <div className="account-form">
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="name" placeholder="name" value={this.state.firstname} onChange={this.handleChange}>
            </input>
            <br></br>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={this.handleChange}>
            </input>
            <br></br>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={this.state.username}
              onChange={this.handleChange}>
            </input>
            <br></br>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={this.state.password}
              onChange={this.handleChange}>
            </input>
            <br></br>
            <input value="Sign Up" type="submit"/>
          </form>
        </div>
      </div>
    )
  }

}

export default connect(null, {signup})(SignUp);
