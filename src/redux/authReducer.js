// action type

const SET_AUTH_USER = `SET_AUTH_USER`;
const TOOGLE_IS_FETCHING_AUTH = `TOOGLE_IS_FETCHING_AUTH`;
const SET_AUTH_USER_PROFILE = `SET_AUTH_USER_PROFILE`;

// reducer
const initialState = {
	userId: null,
	login: null,
	email: null,
	isFetching: false,
	isAuth: false,
	profile: null,
}


const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_AUTH_USER:

			return {
				...state,
				...action.data,
				isAuth: true,
			};
		case TOOGLE_IS_FETCHING_AUTH:
			return {
				...state,
				isFetching: action.isFetching,
			}

		case SET_AUTH_USER_PROFILE:

			return {
				...state,
				profile: action.profile,
			};

		default:
			return state;
	}

}
//ActionCreation


export const setAuthUser = (userId, email, login) => ({ type: SET_AUTH_USER, data: { userId, email, login, }, });
export const toogleIsFetchingAuth = (isFetching) => ({ type: TOOGLE_IS_FETCHING_AUTH, isFetching })
export const setUserProfileAuth = (profile) => ({ type: SET_AUTH_USER_PROFILE, profile, });
//-------------------------------------
export default authReducer;