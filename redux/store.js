import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer'
import logger from 'redux-logger'

// Add middleware
// Every time an action comes in you can attach middleware here
// Here we are attaching a logger
let finalCreateStore = compose(
	applyMiddleware(logger())
)(createStore)







// ES6 allows for default param values as seen here

export default function configureStore(initialState = { todos: [] }){



	return finalCreateStore(reducer, initialState)


}