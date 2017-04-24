// reducers are only ever called when an action occurs
// state argument is not the application state, but only the state that this reducer is responsible for

export default function(state = null, action) {
	// state = null is the initial state - when the user first goes to the app and nothing has been clicked yet. Syntax from ES6, if the state comes in 'undefined' (which React can't handle), set state to 'null' (which it can)
	switch(action.type) {
		case 'BOOK_SELECTED':
			return action.payload;
	}
// base case - if the action called is one we don't care about here. just return current state.
	return state
}