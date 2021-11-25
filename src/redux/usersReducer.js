// action type
const TOOGLE_FOLLOW = `TOOGLE_FOLLOW`,
	SET_USERS = `SET_USERS`,
	SET_CURRENT_PAGE = `SET_CURRENT_PAGE`,
	SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`;

// reducer
const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
}



const usersReducer = (state = initialState, action) => {

	switch (action.type) {
		case TOOGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					return (action.usersId === u.id) ? { ...u, followed: !u.followed } : u;
				}),

			};
		case SET_USERS:

			// return (state.users.length !== 0) ? state :
			return {
				...state,
				users: action.users,
			};

		case SET_CURRENT_PAGE:
			return {
				...state,
				currentPage: action.currentPage,
			};
		case SET_TOTAL_USERS_COUNT:

			return {
				...state,
				totalUsersCount: action.totalUsersCout,
			};

		default:
			return state;
	}

}
//ActionCreation

export const toogleFollowAC = (usersId) => ({ type: TOOGLE_FOLLOW, usersId, });
export const setUsersAC = (users) => ({ type: SET_USERS, users, });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });
export const setTotalUsersCoutAC = (totalUsersCout) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCout, });
//-------------------------------------
export default usersReducer;