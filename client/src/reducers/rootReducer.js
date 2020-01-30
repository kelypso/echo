// Store
import {combineReducers} from 'redux'
import user from './userReducer'
import flights from './flightReducer'

const rootReducer = combineReducers({
    user,
    flights
})

export default rootReducer