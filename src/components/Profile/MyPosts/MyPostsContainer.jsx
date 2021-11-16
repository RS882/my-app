
import React from 'react';
import { addPostsActionCreation, delPostValueActionCreation, updateNewPostTextActionCreation } from '../../../redux/profileReducer';
import StoreContext from '../../../storeContext/storeContext';
import MyPosts from './MyPosts';



const MyPostsContainer = () => {


	return (
		<StoreContext.Consumer>
			{(store) => {
				const state = store.getState().profilePage;
				const onPost = () => store.dispatch(addPostsActionCreation()),
					onPostChange = (text) => store.dispatch(updateNewPostTextActionCreation(text)),
					onDelPostValue = () => store.dispatch(delPostValueActionCreation());
				return (<MyPosts
					onPost={onPost}
					onPostChange={onPostChange}
					onDelPostValue={onDelPostValue}
					posts={state.posts}
					newTextPost={state.newTextPost}
				/>
				)
			}
			}
		</StoreContext.Consumer>
	)
}

export default MyPostsContainer;