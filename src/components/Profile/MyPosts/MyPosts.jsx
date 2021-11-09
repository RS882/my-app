import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {

	const postElements = props.posts.posts.map(p => <Post message={p.message} like={p.like} />),
		newPostElement = React.createRef(),
		addPost = () => {
			props.dispatch({ type: `ADD-POSTS`, });

		},
		onPostChange = () => {
			const text = newPostElement.current.value;
			props.dispatch({ type: `UPDATE-NEW-POST-TEXT`, text: text, });

		},
		delPostValue = () => {
			props.dispatch({ type: `DEL-POST-VALUE`, });
		};

	return (

		<div className={s.postsBlock}>
			<h3 className={s.poststitle}>my posts</h3>
			<div >

				<textarea
					onChange={onPostChange}
					onFocus={delPostValue}
					ref={newPostElement}
					className={s.postsarea}
					value={props.posts.newTextPost}
				/>

				<button onClick={addPost} className={s.button}>add post</button>

			</div>
			<ul className={s.posts}>
				{postElements}


			</ul>
		</div>

	)
}

export default MyPosts;