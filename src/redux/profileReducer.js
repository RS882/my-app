// action type
const ADD_POSTS = `ADD-POSTS`,
	UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`,
	DEL_POST_VALUE = `DEL-POST-VALUE`;



// reducer
const initialState = {
	posts: [
		{ id: 1, message: `Hi, how are you?`, like: '10', },
		{ id: 2, message: `It's my first post`, like: '20', },
	],
	newTextPost: `Enter your post`,
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
				: { ...state };

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

		default:
			return state;
	}

}
//ActionCreation

export const addPostsActionCreation = () => ({ type: ADD_POSTS, });
export const updateNewPostTextActionCreation = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text, });
export const delPostValueActionCreation = () => ({ type: DEL_POST_VALUE, });

//-------------------------------------
export default profileReducer;