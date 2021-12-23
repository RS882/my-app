import { profileAPI } from "../api/api";

// action type
const ADD_POSTS = `ADD-POSTS`;
const UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`;
const DEL_POST_VALUE = `DEL-POST-VALUE`;
const SET_USER_PROFILE = `SET_USER_PROFILE`;


// reducer
const initialState = {
	posts: [
		{ id: 1, message: `Hi, how are you?`, like: '10', },
		{ id: 2, message: `It's my first post`, like: '20', },
	],
	newTextPost: `Enter your post`,
	profile: null,
}



const profileReducer = (state = initialState, action) => {

	switch (action.type) {
		case ADD_POSTS:
			return (state.newTextPost !== `Enter your post`) ?
				{
					...state,
					posts: [
						...state.posts,
						{
							id: state.posts.length + 1,
							message: state.newTextPost,
							like: 0,
						}
					],
					newTextPost: `Enter your post`,
				}
				: state;
		case UPDATE_NEW_POST_TEXT:
			return {
				...state,
				newTextPost: action.text,
			};
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

		default:
			return state;
	}

}
//ActionCreation

export const addPost = () => ({ type: ADD_POSTS, });
export const upPostChange = (text) => ({ type: UPDATE_NEW_POST_TEXT, text, });
export const delPostValue = () => ({ type: DEL_POST_VALUE, });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile, });
//ThunkCreation
export const getProfile = (userId, meId) => (dispatch) => {
	profileAPI.getProfile(userId, meId)
		.then(data => dispatch(setUserProfile(data)))
}




//-------------------------------------
export default profileReducer;