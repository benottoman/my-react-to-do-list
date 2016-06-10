import React from 'react'
import TextDisplay from './TextDisplay'

// Smart component
export default class TextInput extends React.Component {


	constructor(){
		super();
		this.state = {
			inputText: 'test',
		};
	}


	handleChange(event){
		this.setState({
			inputText: event.target.value
		})
	}


	render(){
		return (
			<div>
				<input type="text" value={this.state.inputText} onChange={this.handleChange.bind(this)}/>
				<button type="submit">Submit</button>

				<TextDisplay text={this.state.inputText} />
			</div>
		);
	}

}