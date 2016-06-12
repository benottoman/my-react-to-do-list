import React from 'react'



export default class TodoList extends React.Component {

	render(){
		return (
			
			<ul>
				{ /*  For each todo in this.props.todos return an li element */ }	
				{
					this.props.todos.map((todo) => {
						return <li key={todo.id}>{todo.text}</li>
					})
				}
			</ul>
		)
	}

}