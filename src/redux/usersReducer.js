// action type
const TOOGLE_FOLLOW = `TOOGLE_FOLLOW`;
const SET_USERS = `SET_USERS`;
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`;
const SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`;
const CHANGE_PADINGTON_NEXT = `CHANGE_PADINGTON_NEXT`;
const CHANGE_PADINGTON_PREV = `CHANGE_PADINGTON_PREV`;
const GO_START_PAGE = `GO_START_PAGE`;
const GO_END_PAGE = `GO_END_PAGE`;

// reducer
const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	showPageNumbers: [],
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
			const pagesNubmerStart = Math.ceil(action.totalUsersCount / action.pageSize);
			return {
				...state,
				totalUsersCount: action.totalUsersCout,
				showPageNumbers: (pagesNubmerStart < 11) ? (Array.from(Array(pagesNubmerStart), (e, i) => i + 1))
					: (Array.from(Array(10), (e, i) => i + 1)),
			};
		case CHANGE_PADINGTON_NEXT:
			return {
				...state,
				showPageNumbers:
					(state.showPageNumbers[state.showPageNumbers.length - 1] < state.currentPage) ?
						state.showPageNumbers.map(p => p + action.countSteps)
						: state.showPageNumbers,
			};
		case CHANGE_PADINGTON_PREV:
			return {
				...state,
				showPageNumbers:
					(state.showPageNumbers[0] > state.currentPage) ?
						state.showPageNumbers.map(p => p - action.countSteps)
						: state.showPageNumbers,
			};
		case GO_START_PAGE:
			return {
				...state,
				showPageNumbers: Array.from(Array(10), (e, i) => i + 1)
			};
		case GO_END_PAGE:
			const pagesNubmerEnd = Math.ceil(state.totalUsersCount / state.pageSize);
			return {
				...state,
				showPageNumbers: Array.from(Array(10), (e, i) => pagesNubmerEnd - i).reverse(),
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
export const changePadingtonNextAC = (countSteps) => ({ type: CHANGE_PADINGTON_NEXT, countSteps, });
export const changePadingtonPrevAC = (countSteps) => ({ type: CHANGE_PADINGTON_PREV, countSteps, });
export const goStartPageAC = () => ({ type: GO_START_PAGE, });
export const goEndPageAC = () => ({ type: GO_END_PAGE, });

//-------------------------------------
export default usersReducer;