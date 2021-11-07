const store = {
	state: {
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

	addPosts() {
		const newPost = {
			id: this.state.profilePage.posts.length + 1,
			message: this.state.profilePage.newTextPost,
			like: 0,
		};
		if (this.state.profilePage.newTextPost !== `Enter you post`) {
			this.state.profilePage.posts.push(newPost);
			this.state.profilePage.newTextPost = `Enter you post`;
			this.rerenderEntireTee(this);
		}
	},

	updateNewPostText(text) {
		this.state.profilePage.newTextPost = text;
		this.rerenderEntireTee(this);
	},

	delPostValue() {
		this.state.profilePage.newTextPost = ``;
		this.rerenderEntireTee(this);
	},

	addMessage() {
		const newMessage = {
			id: this.state.dialogsPage.messeges.length + 1,
			message: this.state.dialogsPage.newTextMessage,
			author: `me`,
		};
		if (this.state.dialogsPage.newTextMessage !== `Enter you message`) {
			this.state.dialogsPage.messeges.push(newMessage);
			this.state.dialogsPage.newTextMessage = `Enter you message`;
			this.rerenderEntireTee(this);
		}
	},

	onMessageChange(text) {
		this.state.dialogsPage.newTextMessage = text;
		this.rerenderEntireTee(this);
	},

	delMessageValue() {
		this.state.dialogsPage.newTextMessage = ``;
		this.rerenderEntireTee(this);
	},

	_rerenderEntireTee(store) { },

	get rerenderEntireTee() {
		return this._rerenderEntireTee;
	},
	set rerenderEntireTee(observer) {
		this._rerenderEntireTee = observer;
	},

}


export default store;