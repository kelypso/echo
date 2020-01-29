import React from 'react'
import './App.css'
import {connect} from 'react-redux'
import {Route, Switch, withRouter} from 'react-router-dom'
import {getCurrentUser} from './actions/user'
import NavBar from './components/NavBar.js'
import Home from './components/presentational/Home.js'
import Login from './components/Login.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        Welcome to ECHO
        <Switch>
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.user,
    //flights: state.flights
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))