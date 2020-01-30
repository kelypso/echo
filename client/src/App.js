import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom"
import {connect} from 'react-redux'
import {logout, getCurrentUser} from './actions/userActions.js'
import Home from './components/Home'
import NavBar from './components/NavBar'
import Login from './components/Login'
// import SignUp from './containers/Account/SignUp'
// import About from './components/About'
// import Books from './components/Books'
// import Library from './components/Library'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render(){
    return (
      <div className="App">
        <Router>
          <NavBar user={this.props.user}/>
          <div className="app-background">
            <Switch>
              <Route exact path='/' component={Home} />
              {/* <Route exact path='/search' component={Books} />
              <Route exact path='/about' component={About} />
              <Route exact path='/signup' component={SignUp} /> */}
              <Route exact path='/login' component={Login} />
              <Route path='/logout' render={props => {
                  this.props.logout()
                  return <Redirect to='/' />
                }}
              />
              {/* <Route exact path='/:username'
                render={({match}) => <Library user={this.props.user} match={match} />}
              /> */}
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