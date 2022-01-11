import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Form, Field } from 'react-final-form';



const MyPosts = (props) => {

	const postElements = props.posts.map(p => <Post message={p.message} like={p.like} key={p.id} />);
	//newPostElement = React.createRef(), - не рекомендцутся использовать


	return (

		<div className={s.postsBlock}>
			<h3 className={s.poststitle}>my posts</h3>

			<AddPostForm
				delPostValue={props.delPostValue}
				addPost={props.addPost}
				newTextPost={props.newTextPost} />

			<ul className={s.posts}>
				{postElements}
			</ul>
		</div>

	)
}

const AddPostForm = (props) => {
	let formData = { newTextPost: props.newTextPost, }

	return (
		<Form
			onSubmit={(values) => props.addPost(values.newTextPost)}
			initialValues={{
				...formData
			}}
			render={({ handleSubmit }) =>
				<form onSubmit={handleSubmit} >
					<Field
						component='textarea'
						name='newTextPost'
						onFocus={props.delPostValue}
						className={s.postsarea}
					/>
					<button className={s.button}>add post</button>
				</form>
			}
		/>

	)
}

export default MyPosts;