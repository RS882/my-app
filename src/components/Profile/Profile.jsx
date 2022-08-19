import React from 'react';
import { useDispatch } from 'react-redux';
import { updateUserAvatar } from '../../redux/profileReducer';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	const dispatch = useDispatch();
	const saveAvatar = (file) => dispatch(updateUserAvatar(file));

	return (
		<div >
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				isMe={props.isMe}
				social={props.social}
				jobIcon={props.jobIcon}
				avatarUser={props.avatarUser}
				updateUserStatus={props.updateUserStatus}
				saveAvatar={saveAvatar}
			/>
			<MyPostsContainer />
		</div>
	)
}

export default React.memo(Profile);