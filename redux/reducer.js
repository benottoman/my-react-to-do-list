
// Can have multiple reducers
// Each reducer only recieves their portion of the state
// In this example state could be renamed todoState

export default function reducer(state, action){


	switch (action.type){
		case 'ADD_TODO':

			// ES6 syntax
			// Take object(s) and assign their propeties to the first param object
 			return Object.assign({}, state, {
 				todos: [{
					text: action.text, 					// add 1 new todo at the top of the list
					completed: false,
					id: getId(state)
 				}, ...state.todos]						// append current todos
 			})

 		case: 'COMPLETE_TODO'
 			return Object.assign({}, state, {
 				todos: state.todos.map((todo) => {
 					return todo.id === action.id ? 
 						Object.assign({}, todo, {completed: !todo.completed}) : todo
 				})
 			})

 		// case: 'DELETE_TODO'
 		// 	return state

		default:
			return state;

	}


}



function getId(state){
	
	// Return maxId + 1
	return state.todos.reduce((maxId, todo) => {
		return Math.max(todo.id, maxId)
	}, -1) + 1
}