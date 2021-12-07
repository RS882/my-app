// action type
const TOOGLE_FOLLOW = `TOOGLE_FOLLOW`;
const SET_USERS = `SET_USERS`;
const SET_CURRENT_PAGE = `SET_CURRENT_PAGE`;
const SET_TOTAL_USERS_COUNT = `SET_TOTAL_USERS_COUNT`;
const CHANGE_PADINGTON_NEXT = `CHANGE_PADINGTON_NEXT`;
const CHANGE_PADINGTON_PREV = `CHANGE_PADINGTON_PREV`;
const GO_START_PAGE = `GO_START_PAGE`;
const GO_END_PAGE = `GO_END_PAGE`;
const TOOGLE_IS_FETCHING = `TOOGLE_IS_FETCHING`;
const TOOGLE_FOLLOW_IN_PROGRES = `TOOGLE_FOLLOW_IN_PROGRES`;

// reducer
const initialState = {
	users: [],
	pageSize: 5,
	totalUsersCount: 0,
	currentPage: 1,
	showPageNumbers: (Array.from(Array(10), (e, i) => i + 1)),
	isFetching: false,
	followInProgres: [],
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
			return {
				...state,
				totalUsersCount: action.totalUsersCout,
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
		case TOOGLE_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case TOOGLE_FOLLOW_IN_PROGRES:

			return {
				...state,
				// followInProgres: action.isFetching
				followInProgres: action.isFetching ?
					[...state.followInProgres, action.userId]
					: state.followInProgres.filter(id => id !== action.userId),
			};

		default:
			return state;
	}

}
//ActionCreation

export const toogleFollow = (usersId) => ({ type: TOOGLE_FOLLOW, usersId, });
export const setUsers = (users) => ({ type: SET_USERS, users, });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage, });
export const setTotalUsersCout = (totalUsersCout) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCout, });
export const changePadingtonNext = (countSteps) => ({ type: CHANGE_PADINGTON_NEXT, countSteps, });
export const changePadingtonPrev = (countSteps) => ({ type: CHANGE_PADINGTON_PREV, countSteps, });
export const goStartPage = () => ({ type: GO_START_PAGE, });
export const goEndPage = () => ({ type: GO_END_PAGE, });
export const toogleIsFetching = (isFetching) => ({ type: TOOGLE_IS_FETCHING, isFetching })
export const toogleFollowInProgres = (isFetching, userId) => ({ type: TOOGLE_FOLLOW_IN_PROGRES, isFetching, userId })
//-------------------------------------
export default usersReducer;