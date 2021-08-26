import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
	return (

		<div>
			my posts
			<div>
				<textarea ></textarea>
				<button>add post</button>
			</div>
			<ul className={s.posts}>
				<Post message='Hi, how are you?' like='15' />
				<Post message="It's my first post" like='20' />

			</ul>
		</div>

	)
}

export default MyPosts;