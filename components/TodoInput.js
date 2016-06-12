import React from 'react'
import actions from '../redux/actions'

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
		this.props.dispatch(actions.addTodo(this.state.inputText))
	}


	render(){
		return (
			<div>
				<input 
					type="text" 
					value={this.state.inputText} 
					placeholder="Type in your todo"
					onChange={this.handleChange.bind(this)} 
				/>
				<button onClick={this.handleSubmit.bind(this)}>Submit</button>
			</div>
		)
	}

}