import React from 'react'
// import actions from '../redux/actions'     Don't need to import now that we're
// passing the wrapped action down from App.js

// Smart component
export default class TodoInput extends React.Component {


	constructor(props, context){
		super(props, context);
		this.state = {
			inputText: '',
		};
	}


	handleChange(event){
		this.setState({
			inputText: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault()
		// this.props.dispatch(actions.addTodo(this.state.inputText))
		this.props.addTodo(this.state.inputText)
		this.setState({
			inputText: ''			
		})
	}


	render(){
		return (
			<div>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input 
						type="text" 
						value={this.state.inputText} 
						placeholder="Type in your todo"
						onChange={this.handleChange.bind(this)} 
					/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}

}