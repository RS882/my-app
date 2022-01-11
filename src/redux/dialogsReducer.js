// action type

const ADD_MESSAGE = `ADD-MESSAGE`,
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
		{ id: 3, message: `I'm fine`, author: `ME`, },
		{ id: 4, message: `Yo`, author: `me`, },
	],
	newTextMessage: `Enter your message`,
};

const dialogsReducer = (state = initialState, action) => {


	switch (action.type) {

		case ADD_MESSAGE:

			return (action.newMessage !== `Enter your message`) ?
				{
					...state,
					messeges: [
						...state.messeges,
						{
							id: state.messeges.length + 1,
							message: action.newMessage,
							author: `me`,
						}
					],
					newTextMessage: `Enter your message`,
				}
				: { ...state };

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
export const addMessage = (newMessage) => ({ type: ADD_MESSAGE, newMessage });
export const delMessageValue = () => ({ type: DEL_MESSAGE_VALUE, });
//-------------------------------------
export default dialogsReducer;