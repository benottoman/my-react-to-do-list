import React from 'react'
import TodoInput from './TodoInput'
import TodoList from './TodoList'
import UserInfo from './UserInfo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'


// Actions per page?!
import actions from '../redux/actions'



class App extends React.Component {
    render(){
        return (
        	<div className="test">
            	<h1>Todo List</h1>
                <UserInfo 
                    actions={this.props.actions}
                    user={this.props.user} 
                />
            	<TodoInput addTodo={this.props.actions.addTodo} />
            	<TodoList actions={this.props.actions} todos={this.props.todos} />
            </div>
        )
    }
}


// Currently returns the whole state
// Can be more specific here if needed, ex: state.todos
// --- I'm thinking maybe App will be a 'Page' in a larger app, then only map the state per page
function mapStateToProps(state){
	return state
}


// Wrap actions with dispatch.   
// Allows us to call the actions without dispatch passed down explicitly in each component
// Now if you look at App in the debugger, it will have actions as props
    // No longer has dispath as a prop
// <TodoInput dispatch={this.props.dispatch} />  ==>  <TodoInput addTodo={this.props.actions.addTodo} />
function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}



// Exporting a connected app that has the state passed into it as props
// Look at the React debugger to get a better idea
// You can see that we are now setting a prop todos={this.props.todos} above
// The dispatch is also a prop
export default connect(mapStateToProps, mapDispatchToProps)(App)