// action type

const ADD_MESSAGE = `ADD-MESSAGE`,
	UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`,
	DEL_MESSAGE_VALUE = `DEL-MESSAGE-VALUE`;

// reducer
const initialState = {
	dialogs: [
		{ id: 1, name: `dima`, avatar: `green`, },
		{ id: 2, name: `Alex`, avatar: `red`, },
		{ id: 3, name: `katya`, avatar: `yellow`, },
		{ id: 4, name: `sergiy`, avatar: `yellowgreen`, },
		{ id: 5, name: `vasiliy`, avatar: `aqua`, },
		{ id: 6, name: `viktor`, avatar: `violet`, },
	],
	messeges: [
		{ id: 1, message: `Hi`, author: `dima`, },
		{ id: 2, message: `How are you?`, author: `dima`, },
		{ id: 3, message: `I'm fine`, author: `me`, },
		{ id: 4, message: `Yo`, author: `me`, },
	],
	newTextMessage: `Enter your message`,
};

const dialogsReducer = (state = initialState, action) => {


	switch (action.type) {

		case ADD_MESSAGE:
			return (state.newTextMessage !== `Enter your message`) ?
				{
					...state,
					messeges: [
						...state.messeges,
						{
							id: state.messeges.length + 1,
							message: state.newTextMessage,
							author: `me`,
						}
					],
					newTextMessage: `Enter your message`,
				}
				: { ...state };

		case UPDATE_NEW_MESSAGE_TEXT:
			return {
				...state,
				newTextMessage: action.text,
			};

		case DEL_MESSAGE_VALUE:
			return {
				...state,
				newTextMessage: ``,
			};

		default:
			return state;
	}

};
//ActionCreation
export const addMessage = () => ({ type: ADD_MESSAGE, });
export const updateNewMessageText = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text, });
export const delMessageValue = () => ({ type: DEL_MESSAGE_VALUE, });
//-------------------------------------
export default dialogsReducer;