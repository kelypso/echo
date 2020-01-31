// Store
import {combineReducers} from 'redux'
import user from './userReducer'
import login from './loginReducer'
import signup from './signupReducer'
import flights from './flightReducer'
import flightForm from './flightFormReducer'

const rootReducer = combineReducers({
    user,
    login,
    signup,
    flights,
    flightForm
})

export default rootReducer