import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { addPosts } from './../../../redux/state';

const MyPosts = (props) => {

	const postElements = props.posts.map(p => <Post message={p.message} like={p.like} />),
		newPostElement = React.createRef(),
		addPost = () => {

			const text = newPostElement.current.value;
			props.addPosts(text);
		};

	return (

		<div className={s.postsBlock}>
			<h3 className={s.poststitle}>my posts</h3>
			<div >

				<textarea ref={newPostElement} className={s.postsarea}></textarea>

				<button onClick={addPost} className={s.button}>add post</button>

			</div>
			<ul className={s.posts}>
				{postElements}


			</ul>
		</div>

	)
}

export default MyPosts;