const dialogsReducer = (state, action) => {
	const _addPosts = () => {
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



}