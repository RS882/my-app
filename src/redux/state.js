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
	},
	profilePage: {
		posts: [
			{ id: 1, message: `Hi, how are you?`, like: '10', },
			{ id: 2, message: `It's my first post`, like: '20', },
		],
	},
	sidebar: {
		friends: [
			{ id: 1, name: `katya`, avatar: `yellow`, },
			{ id: 2, name: `dima`, avatar: `green`, },
			{ id: 3, name: `Alex`, avatar: `red`, },
		],
	},

}

export const addPosts = (post) => {


	const newPost = {
		id: 3,
		message: post,
		like: 0,
	};

	state.profilePage.posts.push(newPost);

}

export default state;