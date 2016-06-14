import React from 'react'
// import actions from '../redux/actions'


export default class TodoItem extends React.Component {

	handleComplete(){
		// this.props.dispatch(actions.completeTodo(this.props.todo.id))
		this.props.actions.completeTodo(this.props.todo.id)
	}

	handleDelete(){
		// this.props.dispatch(actions.deleteTodo(this.props.todo.id))	
		this.props.actions.deleteTodo(this.props.todo.id)
	}

	render(){
		return (
			<li>
				<div>{this.props.todo.text}</div>
				<button onClick={this.handleComplete.bind(this)}>Complete</button>
				<button onClick={this.handleDelete.bind(this)}>Delete</button>
			</li>
		)
	}

}