import s from './Post.module.css';

const Post = (props) => {

	return (


		<li className={s.item}>
			<img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhnOH5qHwy79ZR9qZgsvAcuVMFJE3jN6CCpg&usqp=CAU" alt="avatar" />
			{props.message}
			<div>
				<span>{props.like} likes</span>
			</div>
		</li >


	)
}

export default Post;