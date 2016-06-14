import React from 'react'

export default class UserInfo extends React.Component {

	handleNewId(){
		this.props.actions.createNewUserId()
	}

	handleNewIdIfOdd(){
		this.props.actions.createNewUserIdIfOdd()
	}

	handleNewIdIfAsync(){
		this.props.actions.createNewUserIdAsync()
	}

	render(){
		return (
			<li>
				<div>username: {this.props.user.username}</div>
				<div>id: {this.props.user.id}</div>
				<button onClick={this.handleNewId.bind(this)}>Update</button>
				<button onClick={this.handleNewIdIfOdd.bind(this)}>Update Odd</button>
				<button onClick={this.handleNewIdIfAsync.bind(this)}>Update Async</button>
			</li>
		)
	}

}