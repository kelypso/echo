import React, {Component} from 'react'
import {connect} from 'react-redux'
import FlightLog from './FlightLog'
import {findUser} from '../actions/userActions'

class Logbook extends Component {

  componentDidMount() {
    this.props.findUser(this.props.match.params.username)
  }

  render(){
    const user = this.props.user.attributes

    return(
      <div className="Logbook">
          {console.log(this.props.user.attributes)}
        {/* <h2 className="account-greeting">{user.name}'s Logbook</h2>
        <br></br>
        <div className="flight-log">
          <FlightLog flights={user.flights} />
        </div> */}
      </div>
    )
  }

}

export default connect(null, {findUser})(Logbook)