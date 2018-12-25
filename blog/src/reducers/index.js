import { combineReducers } from 'redux'
import postReducer from './postReducer'
import userReducers from './userReducers'
export default combineReducers({
  posts: postReducer,
  users: userReducers
})
