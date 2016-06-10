import React from 'react'


// Dumb component
export default class TextInput extends React.Component {

	render(){
		return <div>{this.props.text}</div>
	}

}