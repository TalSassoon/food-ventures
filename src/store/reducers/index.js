import { combineReducers } from 'redux';
import { userReducer } from './userReducer'
import { reservationReducer } from './reservationReducer'

const rootReducer = combineReducers({
  userReducer,
  reservationReducer
})

export default rootReducer;