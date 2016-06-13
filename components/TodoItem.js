import React from 'react'



export default class TodoList extends React.Component {

	handleComplete(){

	}

	handleDelete(){
		
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