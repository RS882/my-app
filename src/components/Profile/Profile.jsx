import React from 'react';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	return (
		<div >
			<ProfileInfo
				profile={props.profile}
				social={props.social}
				jobIcon={props.jobIcon}
			/>
			<MyPostsContainer />
		</div>
	)
}

export default Profile;