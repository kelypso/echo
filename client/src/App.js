import React from 'react'
import './App.css'
// import {connect} from 'react-redux'
// import {Route, Switch, withRouter} from 'react-router-dom'
// import {getCurrentUser} from './actions/user'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        Welcome to ECHO
      </div>
    )
  }
}