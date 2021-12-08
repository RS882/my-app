import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';



const MyPosts = (props) => {

	const postElements = props.posts.map(p => <Post message={p.message} like={p.like} key={p.id} />);
	//newPostElement = React.createRef(), - не рекомендцутся использовать


	return (

		<div className={s.postsBlock}>
			<h3 className={s.poststitle}>my posts</h3>
			<div >
				<textarea
					onChange={(e) => props.upPostChange(e.target.value)}
					onFocus={() => props.delPostValue()}
					//ref={newPostElement}
					className={s.postsarea}
					value={props.newTextPost}
				/>
				<button
					onClick={() => props.addPost()}
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