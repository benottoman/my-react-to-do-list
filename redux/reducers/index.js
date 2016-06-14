import { combineReducers } from 'redux'
import todoReducer from './todoReducer'
import userReducer from './userReducer'


// state property : reducer to use
const rootReducer = combineReducers({
	todos: todoReducer,
	user: userReducer
})

export default rootReducer