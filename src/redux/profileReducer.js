import { profileAPI } from "../api/api";
import { errorFunction } from "./errorReducer";


// action type
const ADD_POSTS = `ADD-POSTS`;
const DEL_POST_VALUE = `DEL-POST-VALUE`;
export const SET_USER_PROFILE = `SET_USER_PROFILE`;
const SET_USER_STATUS = `SET_USER_STATUS`;
export const SAVE_AVATAR_SUCCESS = `SAVE_AVATAR_SUCCESS`;
const TOOGLE_IS_FETCHING_PROFILE_INFO = `TOOGLE_IS_FETCHING_PROFILE_INFO`;
const ADD_ERROR_MESSAGE_PROFILE_FORM = `ADD_ERROR_MESSAGE_PROFILE_FORM`;
const DEL_ERROR_MESSAGE_PROFILE_FORM = `DEL_ERROR_MESSAGE_PROFILE_FORM`;
const IS_PROFILE_INFO_SUBMITING = `IS_PROFILE_INFO_SUBMITING`;
const IS_EDIT_MODE_PROFILE_INFO = `IS_EDIT_MODE_PROFILE_INFO`;

// reducer
const initialState = {
	posts: [
		{ id: 1, message: `Hi, how are you?`, like: '10', },
		{ id: 2, message: `It's my first post`, like: '20', },
	],
	newTextPost: `Enter your post`,
	profile: null,
	status: ``,
	isFetching: false,
	errorMessage: [],
	isProfileInfoSubmiting: false,
	isEditModeProfileInfo: false,
}



const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POSTS:
			return (action.newPost !== `Enter your post`) ?
				{
					...state,
					posts: [
						...state.posts,
						{
							id: state.posts.length + 1,
							message: action.newPost,
							like: 0,
						}
					],
					newTextPost: `Enter your post`,
				}
				: state;

		case DEL_POST_VALUE:
			return {
				...state,
				newTextPost: ``,
			};
		case SET_USER_PROFILE:

			return {
				...state,
				profile: action.profile,
			};
		case SET_USER_STATUS:
			return {
				...state,
				status: action.status,
			};

		case SAVE_AVATAR_SUCCESS:
			return {
				...state,
				profile: { ...state.profile, photos: action.file },
			};
		case TOOGLE_IS_FETCHING_PROFILE_INFO:

			return {
				...state,
				isFetching: action.isFetching,
			};
		case ADD_ERROR_MESSAGE_PROFILE_FORM:

			return {
				...state,
				errorMessage: action.errorMessage,
			};
		case DEL_ERROR_MESSAGE_PROFILE_FORM:

			return {
				...state,
				errorMessage: [],
			};
		case IS_PROFILE_INFO_SUBMITING:

			return {
				...state,
				isProfileInfoSubmiting: action.isProfileInfoSubmiting,
			};
		case IS_EDIT_MODE_PROFILE_INFO:

			return {
				...state,
				isEditModeProfileInfo: action.isEditModeProfileInfo,
			};

		default:
			return state;
	}

}
//ActionCreation

export const addPost = (newPost) => ({ type: ADD_POSTS, newPost });
export const delPostValue = () => ({ type: DEL_POST_VALUE, });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile, });
export const setUserStatus = (status) => ({ type: SET_USER_STATUS, status, });
export const saveAvatarSucсess = (file) => ({ type: SAVE_AVATAR_SUCCESS, file, });
export const toogleIsFetchingProfileInfo = (isFetching) => ({ type: TOOGLE_IS_FETCHING_PROFILE_INFO, isFetching, });
export const addErrorsMessageProfileFrom = (errorMessage) => ({ type: ADD_ERROR_MESSAGE_PROFILE_FORM, errorMessage, });
export const delErrorsMessageProfileFrom = () => ({ type: DEL_ERROR_MESSAGE_PROFILE_FORM, });
export const setIsProfileInfoSubmiting = (isProfileInfoSubmiting) => ({ type: IS_PROFILE_INFO_SUBMITING, isProfileInfoSubmiting, });
export const setIsEditModeProfile = (isEditModeProfileInfo) => ({ type: IS_EDIT_MODE_PROFILE_INFO, isEditModeProfileInfo, });
//ThunkCreation




export const getProfile = (userId, meId) => (dispatch) => {
	dispatch(toogleIsFetchingProfileInfo(true));
	profileAPI.getProfile(userId, meId)
		.then(response => dispatch(setUserProfile(response)))
		.then(() => dispatch(toogleIsFetchingProfileInfo(false)))
		.catch(error => { errorFunction(dispatch, error, toogleIsFetchingProfileInfo) });

};
export const getUserStatus = (userId) => async (dispatch) => {
	try {
		const response = await profileAPI.getStatus(userId);
		dispatch(setUserStatus(response));
	}
	catch (error) {
		errorFunction(dispatch, error, toogleIsFetchingProfileInfo)
	}
};

export const updateUserStatus = (status) => async (dispatch) => {
	try {
		const response = await profileAPI.updateStatus(status);
		response.resultCode === 0 && dispatch(setUserStatus(status));
	}
	catch (error) {
		errorFunction(dispatch, error, toogleIsFetchingProfileInfo)
	}
};
export const updateUserAvatar = (file) => async (dispatch) => {
	try {
		const response = await profileAPI.putAvater(file);
		response.resultCode === 0 && dispatch(saveAvatarSucсess(response.data.photos));
	}
	catch (error) {
		errorFunction(dispatch, error, toogleIsFetchingProfileInfo)
	}
};

export const updateUserInfo = (userInfo) => (dispatch) => {
	dispatch(toogleIsFetchingProfileInfo(true));

	profileAPI.putProfileInfo(userInfo)
		.then(response => {
			if (response.resultCode === 0) {
				dispatch(getProfile(userInfo.userId, userInfo.userId));
				dispatch(setIsEditModeProfile(false));
			} else {
				dispatch(setIsProfileInfoSubmiting(true));
				dispatch(addErrorsMessageProfileFrom(response.messages))
			}
		})
		.then(() => dispatch(toogleIsFetchingProfileInfo(false)))
		.catch(error => { errorFunction(dispatch, error, toogleIsFetchingProfileInfo) });
	;




}



//-------------------------------------
export default profileReducer;