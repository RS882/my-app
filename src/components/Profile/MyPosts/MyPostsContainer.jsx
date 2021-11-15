

import React from 'react';
import { addPostsActionCreation, delPostValueActionCreation, updateNewPostTextActionCreation } from '../../../redux/profileReducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {

	const state = props.store.getState().profilePage;
	const onPost = () => props.store.dispatch(addPostsActionCreation()),
		onPostChange = (text) => props.store.dispatch(updateNewPostTextActionCreation(text)),
		onDelPostValue = () => props.store.dispatch(delPostValueActionCreation());

	return (

		<MyPosts
			onPost={onPost}
			onPostChange={onPostChange}
			onDelPostValue={onDelPostValue}
			posts={state.posts}
			newTextPost={state.newTextPost}
		/>

	)
}

export default MyPostsContainer;