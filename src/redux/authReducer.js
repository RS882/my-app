// action type
import { loginAPI, profileAPI } from './../api/api';


const SET_AUTH_USER = `SET_AUTH_USER`;
const TOOGLE_IS_FETCHING_AUTH = `TOOGLE_IS_FETCHING_AUTH`;
const SET_AUTH_USER_PROFILE = `SET_AUTH_USER_PROFILE`;
const ADD_ERROR_MESSAGE = `ADD_ERROR_MESSAGE`;
const DEL_ERROR_MESSAGE = `DEL_ERROR_MESSAGE`;
const ADD_REDIRECT_LOGIN_URL = `ADD_REDIRECT_LOGIN_URL`;
const DEL_REDIRECT_LOGIN_URL = `DEL_REDIRECT_LOGIN_URL`;
// reducer
const initialState = {
	userId: null,
	login: null,
	email: null,
	isFetching: false,
	isAuth: false,
	profile: null,
	errorMessage: null,
	loginRedirectUrl: null,
}


const authReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_AUTH_USER:
			return {
				...state,
				...action.data,
			};
		case TOOGLE_IS_FETCHING_AUTH:
			return {
				...state,
				isFetching: action.isFetching,
			};
		case SET_AUTH_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			};
		case ADD_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: action.error,
			};
		case DEL_ERROR_MESSAGE:
			return {
				...state,
				errorMessage: null,
			};
		case ADD_REDIRECT_LOGIN_URL:
			return {
				...state,
				loginRedirectUrl: action.url,
			};
		case DEL_REDIRECT_LOGIN_URL:
			return {
				...state,
				loginRedirectUrl: null,
			};
		default:
			return state;
	}

}
//ActionCreation


export const setAuthUser = (userId, email, login, isAuth) => ({ type: SET_AUTH_USER, data: { userId, email, login, isAuth, }, });
export const toogleIsFetchingAuth = (isFetching) => ({ type: TOOGLE_IS_FETCHING_AUTH, isFetching })
export const setUserProfileAuth = (profile) => ({ type: SET_AUTH_USER_PROFILE, profile, });
export const addErrorMessage = (error) => ({ type: ADD_ERROR_MESSAGE, error, });
export const delErrorMessage = () => ({ type: DEL_ERROR_MESSAGE, });
export const addRedirectLoginUrl = (url) => ({ type: ADD_REDIRECT_LOGIN_URL, url, });
export const delRedirectLoginUrl = () => ({ type: DEL_REDIRECT_LOGIN_URL, });

//ThunkCreation
export const getAuthUser = () => (dispatch) => {
	dispatch(toogleIsFetchingAuth(true))
	loginAPI.getAuthUser()
		.then(data => {
			dispatch(toogleIsFetchingAuth(false))
			if (data.resultCode === 0) {
				const { id, email, login, } = data.data;
				dispatch(setAuthUser(id, email, login, true))
				return id;
			}
		})
		.then(id => {
			profileAPI.getProfile(id)
				.then(data => dispatch(setUserProfileAuth(data)))

		})

}
export const loginUser = (formData) => (dispatch) => {
	dispatch(toogleIsFetchingAuth(true))
	loginAPI.loginUser(formData)
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(getAuthUser())
			}
			dispatch(toogleIsFetchingAuth(false))
			return data
		})
		.then(error => {
			if (error.messages.length > 0) {
				dispatch(addErrorMessage(error.messages))
			}
		})
}

export const logoutUser = () => (dispatch) => {
	dispatch(toogleIsFetchingAuth(true))
	loginAPI.logoutUser()
		.then(data => {
			if (data.resultCode === 0) {
				dispatch(setAuthUser(null, null, null, false))
				dispatch(setUserProfileAuth(null))
				dispatch(addErrorMessage(null))
				dispatch(addRedirectLoginUrl(null))
			}
			dispatch(toogleIsFetchingAuth(false))
		})
}

//-------------------------------------
export default authReducer;