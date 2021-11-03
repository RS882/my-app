import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';


const MyPosts = (props) => {

	const postElements = props.posts.map(p => <Post message={p.message} like={p.like} />),
		newPostElement = React.createRef(),
		addPost = () => {
			props.addPosts();

		},
		onPostChange = () => {
			const text = newPostElement.current.value;
			props.updateNewPostText(text);

		},
		delPostValue = () => {
			props.delPostValue();
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
					value={props.newTextPost}
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