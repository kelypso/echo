import React from 'react'
import './App.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {connect} from 'react-redux'
import {logout, getCurrentUser} from './actions/userActions.js'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
// import Signup from './components/Signup'
// import Logbook from './components/Logbook'

class App extends React.Component {

  // componentDidMount() {
  //   this.props.getCurrentUser()
  // }

  render(){
    return (
      <div className="App">
        <Router>
          <NavBar user={this.props.user}/>
          <div className="app-background">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            {/* <Route exact path='/signup' component={Signup} />
            <Route path='/logout' render={props => {
                this.props.logout()
                return <Redirect to='/' />
              }}
            /> */}
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

const mapStateToProps = ({user}) => {
  return {
    user
  }
}

export default connect(mapStateToProps, {logout, getCurrentUser})(App);








// import React, {Component} from 'react'
// import './App.css'
// // import {connect} from 'react-redux'
// import {Route, Switch, withRouter} from 'react-router-dom'
// // import {getCurrentUser} from './actions/user'
// import Login from './components/Login'

// class App extends Component {

//   render() {
//     return (
//       <div className="App">
//         Welcome to ECHO
//         <Switch>
//           <Route exact path='/login' component={Login} />
//         </Switch>
//       </div>
//     )
//   }
// }

// export default App