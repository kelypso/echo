import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/userActions.js'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
import Signup from './components/Signup'
import FlightLog from './components/FlightLog'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <Router>
          <NavBar user={user}/>
          <div className="app-background">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/flights' component={FlightLog} />
              {/* <Route exact path='/:username'
                render={({match}) => <Logbook user={this.props.user} match={match} />}
              /> */}
              {/* <Route exact path='/search' component={Books} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.user,
    user: state.user,
    flights: state.flights
  })
}

export default withRouter(connect(mapStateToProps, {getCurrentUser})(App))

