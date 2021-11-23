// action type
const TOOGLE_FOLLOW = `TOOGLE_FOLLOW`,
	SET_USERS = `SET_USERS`;

// reducer
const initialState = {
	users: [],
	// [
	// 	{
	// 		id: 1,
	// 		avatar: 'red',
	// 		follow: true,
	// 		firstName: 'Dima',
	// 		status: "I'm the best",
	// 		location: { city: 'Berlin', contry: 'Germany', },
	// 	},
	// 	{
	// 		id: 2,
	// 		avatar: 'green',
	// 		follow: false,
	// 		firstName: 'Alex',
	// 		status: "I'm cool",
	// 		location: { city: 'Paris', contry: 'France', },
	// 	},
	// 	{
	// 		id: 3,
	// 		avatar: 'aqua',
	// 		follow: false,
	// 		firstName: 'Lena',
	// 		status: "I'm super",
	// 		location: { city: 'New York', contry: 'USA', },
	// 	},
	// 	{
	// 		id: 4,
	// 		avatar: 'blueviolet',
	// 		follow: true,
	// 		firstName: 'Oleg',
	// 		status: "I'm boss",
	// 		location: { city: 'Warsawa', contry: 'Poland', },
	// 	},
	// ],

}



const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOOGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					return (action.usersId === u.id) ? { ...u, follow: !u.follow } : u;
				}),

			};
		case SET_USERS:

			return {
				...state,
				users: [...state.users, ...action.users]
			};

		default:
			return state;
	}

}
//ActionCreation

export const toogleFollowAC = (usersId) => ({ type: TOOGLE_FOLLOW, usersId, });
export const setUsersAC = (users) => ({ type: SET_USERS, users, });


//-------------------------------------
export default usersReducer;