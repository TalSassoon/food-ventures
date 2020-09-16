import { combineReducers } from 'redux';
import { chefReducer } from './chefReducer'
import { userReducer } from './userReducer'

const rootReducer = combineReducers({
  chefReducer,
  userReducer
})

export default rootReducer;