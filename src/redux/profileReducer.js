import { profileAPI } from "../api/api";


// action type
const ADD_POSTS = `ADD-POSTS`;
const DEL_POST_VALUE = `DEL-POST-VALUE`;
export const SET_USER_PROFILE = `SET_USER_PROFILE`;
const SET_USER_STATUS = `SET_USER_STATUS`;
export const SAVE_AVATAR_SUCCESS = `SAVE_AVATAR_SUCCESS`;
const TOOGLE_IS_FETCHING_PROFILE_INFO = `TOOGLE_IS_FETCHING_PROFILE_INFO`;


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
//ThunkCreation
export const getProfile = (userId, meId) => async (dispatch) => {
	dispatch(toogleIsFetchingProfileInfo(true));
	const response = await profileAPI.getProfile(userId, meId)
		.then(response => dispatch(setUserProfile(response)));
	dispatch(toogleIsFetchingProfileInfo(false));
};
export const getUserStatus = (userId) => async (dispatch) => {
	const response = await profileAPI.getStatus(userId);
	dispatch(setUserStatus(response));
};

export const updateUserStatus = (status) => async (dispatch) => {
	const response = await profileAPI.updateStatus(status);
	response.resultCode === 0 && dispatch(setUserStatus(status));
};
export const updateUserAvatar = (file) => async (dispatch) => {
	const response = await profileAPI.putAvater(file);
	response.resultCode === 0 && dispatch(saveAvatarSucсess(response.data.photos));
};

export const updateUserInfo = (userInfo) => async (dispatch) => {
	dispatch(toogleIsFetchingProfileInfo(true));
	const response = await profileAPI.putProfileInfo(userInfo)
		.then((response) => response.resultCode === 0 && dispatch(getProfile(userInfo.userId, userInfo.userId)));


	dispatch(toogleIsFetchingProfileInfo(false));

}



//-------------------------------------
export default profileReducer;