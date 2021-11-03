import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {



	return (
		<div >
			<ProfileInfo />
			<MyPosts
				posts={props.state.posts}
				addPosts={props.addPosts}
				newTextPost={props.state.newTextPost}
				updateNewPostText={props.updateNewPostText}
			/>
		</div>
	)
}

export default Profile;