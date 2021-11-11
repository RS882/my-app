// файл не исаользуется- для понятия структуры redux


import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";

const store = {
	_state: {
		dialogsPage: {
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
		},
		profilePage: {
			posts: [
				{ id: 1, message: `Hi, how are you?`, like: '10', },
				{ id: 2, message: `It's my first post`, like: '20', },
			],
			newTextPost: `Enter your post`,
		},
		sidebar: {
			friends: [
				{ id: 1, name: `katya`, avatar: `yellow`, },
				{ id: 2, name: `dima`, avatar: `green`, },
				{ id: 3, name: `Alex`, avatar: `red`, },
			],
		},

	},

	_callSubscriber(store) { },

	getState() {
		return this._state;
	},


	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) { // action {type: ``,  }
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.sidebar = sidebarReducer(this._state.sidebar, action);
		this._callSubscriber(this._state);
	}
}

export default store;