import s from './Post.module.css';
import React from 'react';
import avatar from './../../../../assets/img/images.jpg'
const Post = (props) => {

	return (


		<li className={s.item}>
			<div className={s.box}>
				<img className={s.img} src={avatar} alt="avatar" />
				{props.message}
			</div>
			<div>
				<span>{props.like} likes</span>
			</div>
		</li >


	)
}

export default Post;