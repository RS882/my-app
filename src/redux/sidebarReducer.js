// action type
//-------------------------------------
// reducer
const initialState = {
	friends: [
		{ id: 1, name: `katya`, avatar: `yellow`, },
		{ id: 2, name: `dima`, avatar: `green`, },
		{ id: 3, name: `Alex`, avatar: `red`, },
	],
}

const sidebarReducer = (state = initialState, action) => {
	return state;
}
//ActionCreation
//-------------------------------------
export default sidebarReducer