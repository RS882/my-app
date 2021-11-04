let rerenderEntireTee = (state) => { };


const state = {
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

};

export const subscribe = (observer) => {
	rerenderEntireTee = observer;
};


export const addPosts = () => {
	const newPost = {
		id: state.profilePage.posts.length + 1,
		message: state.profilePage.newTextPost,
		like: 0,
	};
	if (state.profilePage.newTextPost !== `Enter you post`) {
		state.profilePage.posts.push(newPost);
		state.profilePage.newTextPost = `Enter you post`;
		rerenderEntireTee(state);
	}


};

export const updateNewPostText = (text) => {
	state.profilePage.newTextPost = text;
	rerenderEntireTee(state);
};

export const delPostValue = () => {
	state.profilePage.newTextPost = ``;
	rerenderEntireTee(state);

};

export const onMessageChange = (text) => {
	state.dialogsPage.newTextMessage = text;
	rerenderEntireTee(state);
};

export const addMessage = () => {
	const newMessage = {
		id: state.dialogsPage.messeges.length + 1,
		message: state.dialogsPage.newTextMessage,
		author: `me`,
	};
	if (state.dialogsPage.newTextMessage !== `Enter you message`) {
		state.dialogsPage.messeges.push(newMessage);
		state.dialogsPage.newTextMessage = `Enter you message`;
		rerenderEntireTee(state);
	}
};

export const delMessageValue = () => {
	state.dialogsPage.newTextMessage = ``;
	rerenderEntireTee(state);
};




export default state;