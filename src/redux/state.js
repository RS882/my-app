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
			newTextMessage: `Enter you message`,
		},
		profilePage: {
			posts: [
				{ id: 1, message: `Hi, how are you?`, like: '10', },
				{ id: 2, message: `It's my first post`, like: '20', },
			],
			newTextPost: `Enter you post`,
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
		if (this.state.profilePage.newTextPost !== `Enter you post`) {
			this.state.profilePage.posts.push(newPost);
			this.state.profilePage.newTextPost = `Enter you post`;
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
		if (this.state.dialogsPage.newTextMessage !== `Enter you message`) {
			this.state.dialogsPage.messeges.push(newMessage);
			this.state.dialogsPage.newTextMessage = `Enter you message`;
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
		if (action.type === `ADD-POSTS`) this._addPosts();
		if (action.type === `UPDATE-NEW-POST-TEXT`) this._updateNewPostText(action.text);
		if (action.type === `DEL-POST-VALUE`) this._delPostValue();
		if (action.type === `ADD-MESSAGE`) this._addMessage();
		if (action.type === `UPDATE-NEW-MESSAGE-TEXT`) this._updateNewMessageChange(action.text);
		if (action.type === `DEL-MESSAGE-VALUE`) this._delMessageValue();

	}

}


export default store;