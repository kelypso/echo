// Store
import {combineReducers} from 'redux'
import user from './userReducer'
import login from './loginReducer'
import signup from './signupReducer'
import flights from './flightReducer'

const rootReducer = combineReducers({
    user,
    login,
    signup,
    flights
})

export default rootReducer