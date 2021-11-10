// action type

const ADD_MESSAGE = `ADD-MESSAGE`,
	UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`,
	DEL_MESSAGE_VALUE = `DEL-MESSAGE-VALUE`;


// reducer
const dialogsReducer = (state, action) => {

	switch (action.type) {
		case ADD_MESSAGE:
			const newMessage = {
				id: state.messeges.length + 1,
				message: state.newTextMessage,
				author: `me`,
			};
			if (state.newTextMessage !== `Enter your message`) {
				state.messeges.push(newMessage);
				state.newTextMessage = `Enter your message`;
			}
			return state;
		case UPDATE_NEW_MESSAGE_TEXT:
			state.newTextMessage = action.text;
			return state;
		case DEL_MESSAGE_VALUE:
			state.newTextMessage = ``;
			return state;
		default:
			return state;
	}

};
//ActionCreation
export const addMessageActionCreation = () => ({ type: ADD_MESSAGE, });
export const updateNewMessageTextActionCreation = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text, });
export const delMessageValueActionCreation = () => ({ type: DEL_MESSAGE_VALUE, });
//-------------------------------------
export default dialogsReducer;