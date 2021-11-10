import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPostsActionCreation, delPostValueActionCreation, updateNewPostTextActionCreation } from '../../../redux/state';


const MyPosts = (props) => {

	const postElements = props.posts.posts.map(p => <Post message={p.message} like={p.like} />),
		//newPostElement = React.createRef(), - не рекомендцутся использовать
		addPost = () => {
			props.dispatch(addPostsActionCreation());

		},
		onPostChange = (e) => {
			//const text = newPostElement.current.value;
			const text = e.target.value;
			props.dispatch(updateNewPostTextActionCreation(text));

		},
		delPostValue = () => {
			props.dispatch(delPostValueActionCreation());
		};

	return (

		<div className={s.postsBlock}>
			<h3 className={s.poststitle}>my posts</h3>
			<div >
				<textarea
					onChange={onPostChange}
					onFocus={delPostValue}
					//ref={newPostElement}
					className={s.postsarea}
					value={props.posts.newTextPost}
				/>
				<button
					onClick={addPost}
					className={s.button}
				>add post</button>
			</div>
			<ul className={s.posts}>
				{postElements}
			</ul>
		</div>

	)
}

export default MyPosts;