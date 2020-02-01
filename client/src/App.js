import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch, withRouter} from "react-router-dom"
import {connect} from 'react-redux'
import {findUser} from './actions/userActions'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import Account from './components/Account'
import FlightLog from './containers/FlightLog'
import FlightShow from './components/FlightShow'
import NewFlight from './containers/NewFlight'

class App extends React.Component {

  componentDidMount() {
    this.props.findUser()
  }

  render(){
    const {loggedIn, flights} = this.props
    return (
      <div className="App">
        <Router>
          <div className="app-background">
            {loggedIn ? <Account /> : <Home />}
            <Switch>
              <Route exact path='/login' component={Login} />
              <Route exact path='/signup' component={Signup} />
              <Route exact path='/flights' component={FlightLog} />
              <Route exact path='/flights/new' component={NewFlight} />
              <Route exact path='/flights/:id' render={props => {
                const flight = flights.find(f => f.id === props.match.params.id)
                return <FlightShow flight={flight} {...props} />
              }} />
              
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
    flights: state.flights
  })
}

export default withRouter(connect(mapStateToProps, {findUser})(App))

