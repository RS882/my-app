import s from './MyPosts.module.css';
import Post from './Post/Post';
import React from 'react';
import { Form, Field } from 'react-final-form';
import { composeValidators, maxLength, required } from './../../../utilits/validators';
import { Textarea } from './../../common/formControl/formControl';
import TextareaForm from './../../forms/TextareaForm/TextareaForm';




const MyPosts = (props) => {

	const postElements = props.posts.map(p => <Post message={p.message} like={p.like} key={p.id} />);
	//newPostElement = React.createRef(), - не рекомендцутся использовать


	return (

		<div className={s.postsBlock}>
			<h3 className={s.poststitle}>my posts</h3>
			<TextareaForm
				delValue={props.delPostValue}
				addValue={props.addPost}
				newTextValue={props.newTextPost}
				nameForm={`newTextPost`}
				maxLengthText={50}
				buttonName={`add post`}
			/>
			<ul className={s.posts}>
				{postElements}
			</ul>
		</div>

	)
}





export default MyPosts;