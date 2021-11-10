
// action type
const ADD_MESSAGE = `ADD-MESSAGE`,
	UPDATE_NEW_MESSAGE_TEXT = `UPDATE-NEW-MESSAGE-TEXT`,
	DEL_MESSAGE_VALUE = `DEL-MESSAGE-VALUE`,
	ADD_POSTS = `ADD-POSTS`,
	UPDATE_NEW_POST_TEXT = `UPDATE-NEW-POST-TEXT`,
	DEL_POST_VALUE = `DEL-POST-VALUE`;

//------------------------------------
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

	_addPosts() {
		const newPost = {
			id: this.state.profilePage.posts.length + 1,
			message: this.state.profilePage.newTextPost,
			like: 0,
		};
		if (this.state.profilePage.newTextPost !== `Enter your post`) {
			this.state.profilePage.posts.push(newPost);
			this.state.profilePage.newTextPost = `Enter your post`;
			this.subscribe(this.state);
		}
	},

	_updateNewPostText(text) {
		this.state.profilePage.newTextPost = text;
		this.subscribe(this.state);
	},

	_delPostValue() {
		this.state.profilePage.newTextPost = ``;
		this.subscribe(this.state);
	},

	_addMessage() {
		const newMessage = {
			id: this.state.dialogsPage.messeges.length + 1,
			message: this.state.dialogsPage.newTextMessage,
			author: `me`,
		};
		if (this.state.dialogsPage.newTextMessage !== `Enter your message`) {
			this.state.dialogsPage.messeges.push(newMessage);
			this.state.dialogsPage.newTextMessage = `Enter your message`;
			this.subscribe(this.state);
		}
	},

	_updateNewMessageChange(text) {
		this.state.dialogsPage.newTextMessage = text;
		this.subscribe(this.state);
	},

	_delMessageValue() {
		this.state.dialogsPage.newTextMessage = ``;
		this.subscribe(this.state);
	},

	_callSubscriber(store) { },

	get state() {
		return this._state;
	},

	get subscribe() {
		return this._callSubscriber;
	},
	set subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) { // action {type: ``,  }
		if (action.type === ADD_POSTS) this._addPosts();
		if (action.type === UPDATE_NEW_POST_TEXT) this._updateNewPostText(action.text);
		if (action.type === DEL_POST_VALUE) this._delPostValue();
		if (action.type === ADD_MESSAGE) this._addMessage();
		if (action.type === UPDATE_NEW_MESSAGE_TEXT) this._updateNewMessageChange(action.text);
		if (action.type === DEL_MESSAGE_VALUE) this._delMessageValue();

	}

}
//action Creation
export const addMessageActionCreation = () => ({ type: ADD_MESSAGE, });
export const updateNewMessageTextActionCreation = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, text: text, });
export const delMessageValueActionCreation = () => ({ type: DEL_MESSAGE_VALUE, });
export const addPostsActionCreation = () => ({ type: ADD_POSTS, });
export const updateNewPostTextActionCreation = (text) => ({ type: UPDATE_NEW_POST_TEXT, text: text, });
export const delPostValueActionCreation = () => ({ type: DEL_POST_VALUE, });

export default store;