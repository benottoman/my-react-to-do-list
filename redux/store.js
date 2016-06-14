import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers'			// stating just the directory will auto retrieve the index.js file
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Add middleware
// Every time an action comes in you can attach middleware here
// Here we are attaching a logger
// thunk middleware checks if the action is returning an object or a function
// if object it is returned right aware (normal flow)
// if function then it executes the function first (asynchronous flow)
let finalCreateStore = compose(
	applyMiddleware(logger(), thunk)
)(createStore)


// ES6 allows for default param values as seen here
export default function configureStore(initialState = { todos: [], user: {} }){
	return finalCreateStore(rootReducer, initialState)
}