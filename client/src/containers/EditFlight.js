import React from 'react'
import FlightForm from '../components/FlightForm'
import {updateFlight, deleteFlight} from '../actions/flightActions'
import {setEditFlightForm, resetFlightForm} from '../actions/flightFormActions'
import {connect} from 'react-redux'

class EditFlight extends React.Component {

    componentDidMount() {
        this.props.flight && this.props.setEditFlightForm(this.props.flight)
    }

    componentDidUpdate(prevProps) {
        this.props.flight && !prevProps.flight && this.props.setEditFlightForm(this.props.flight)
    }

    componentWillUnmount() {
        this.props.resetFlightForm()
    }

    handleSubmit = (flightData) => {
        const {updateFlight, flight, history} = this.props
        updateFlight({
            ...flightData, 
            flightId: flight.id
        }, history)
    }
    
    render() {
        const {flight, deleteFlight, history} = this.props
        const flightId = flight ? flight.id : null
        return (
            <div className="EditFlight">
                <br/><br/><FlightForm editMode handleSubmit={this.handleSubmit} /><br/>
                <button onClick={() => deleteFlight(flightId, history)} className="form-button">Delete Flight</button>
                <p className="caution">*Deleting a flight will remove all associated entries*</p> 
            </div>
        )
    }
}

export default connect(null, {updateFlight, deleteFlight, setEditFlightForm, resetFlightForm})(EditFlight)