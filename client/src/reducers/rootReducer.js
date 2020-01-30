// Store
import {combineReducers} from 'redux'
import user from './userReducer'
import login from './loginReducer'
import flights from './flightReducer'

const rootReducer = combineReducers({
    user,
    login,
    flights
})

export default rootReducer