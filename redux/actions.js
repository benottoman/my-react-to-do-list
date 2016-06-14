// Action creators
let actions = {

	addTodo: function(text){
		return {
			type: 'ADD_TODO',
			text: text
		}
	},

	completeTodo: function(id){
		return {
			type: 'COMPLETE_TODO',
			id: id
		}
	},

	deleteTodo: function(id){
		return {
			type: 'DELETE_TODO',
			id: id
		}
	},

	createNewUserId: function(){
		return {
			type: 'CREATE_USER_ID',
			id: Math.round(Math.random() * 100)
		}
	},


	
	createNewUserIdIfOdd: function(){
		// Thunk will check if it is a function
		return (dispatch, getState) => {
			const { user } = getState()
			if (user.id % 2 === 0){
				return
			}

			dispatch(actions.createNewUserId())
		}
	},

	createNewUserIdAsync: function(){
		// Use this to do server calls
		return (dispatch) => {


			// $.get('url', {
			// 	success: () => {
			// 		dispatch(actions.create(data))
			// 	}
			// })

			setTimeout(() => {
				dispatch(actions.createNewUserId())
			}, 2000)
		}


	}

}


export default actions