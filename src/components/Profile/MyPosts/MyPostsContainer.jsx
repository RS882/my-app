
// import React from 'react';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPost, upPostChange, delPostValue, } from './../../../redux/profileReducer';


// const MyPostsContainer = () => {


// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => {
// 				const state = store.getState().profilePage;
// 				const onPost = () => store.dispatch(addPostsActionCreation()),
// 					onPostChange = (text) => store.dispatch(updateNewPostTextActionCreation(text)),
// 					onDelPostValue = () => store.dispatch(delPostValueActionCreation());
// 				return (<MyPosts
// 					onPost={onPost}
// 					onPostChange={onPostChange}
// 					onDelPostValue={onDelPostValue}
// 					posts={state.posts}
// 					newTextPost={state.newTextPost}
// 				/>
// 				)
// 			}
// 			}
// 		</StoreContext.Consumer>
// 	)
// }


const mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newTextPost: state.profilePage.newTextPost,
	}
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		onPost: () => dispatch(addPostsActionCreation()),
// 		onPostChange: (text) => dispatch(updateNewPostTextActionCreation(text)),
// 		onDelPostValue: () => dispatch(delPostValueActionCreation()),
// 	}
// }



export default connect(mapStateToProps, {
	addPost, upPostChange, delPostValue,
})(MyPosts);;