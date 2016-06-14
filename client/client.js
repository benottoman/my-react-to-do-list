import React from 'react'				// var React = require('react');
import { render } from 'react-dom' 		// var render = require('react-dom').render;
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

// let declares variable limited in scope to the block, statement, or expression on which it is used

let initialState = {
	todos: [{	
		id: 0,
		completed: false,

		text: 'Our first todo'
	}],
	user: {
		username: 'ben',
		id: 13
	}
}



let store = configureStore(initialState)


const app = document.getElementById('app')


// Provider essentiall connects the components to the store

render(
	<Provider store={store}>
    	<App /> 
    </Provider>,	
    app     
)