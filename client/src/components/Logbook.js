import React, {Component} from 'react'
import {connect} from 'react-redux'
import Flights from './Flights'
import {findUser} from '../actions/userActions'

class Logbook extends Component {

  componentDidMount() {
    this.props.findUser(this.props.match.params.username)
  }

  render(){
    const user = this.props.user

    return(
      <div className="Logbook">
        <h2 className="account-greeting">{user.name}'s Logbook</h2>
        <br></br>
        <div className="flight-list">
          <Flights flights={user.flights} />
        </div>
      </div>
    )
  }

}

export default connect(null, {findUser})(Logbook)