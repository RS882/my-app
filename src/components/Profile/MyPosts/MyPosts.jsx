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
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
				<Post />
			</ul>
		</div>

	)
}

export default MyPosts;