import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import { connect } from 'react-redux'




class App extends React.Component {
    render(){
        return (
        	<div className="test">
            	<h1>This is the App Component.</h1>

            	<TodoInput dispatch={this.props.dispatch} />
            	<TodoList todos={this.props.todos} />
            </div>
        )
    }
}


function mapStateToProps(state){
	// Currently returns the whole state
	// Can be more specific here if needed, ex: state.todos

	return state
}

// Exporting a connected app that has the state passed into it as props
// Look at the React debugger to get a better idea
// You can see that we are now setting a prop todos={this.props.todos} above
// The dispatch is also a prop
export default connect(mapStateToProps)(App)