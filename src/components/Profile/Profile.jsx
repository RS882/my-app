import React from 'react';
import { useSelector } from 'react-redux';
import Preloader from '../common/preloader/preloader';

import MyPostsContainer from './MyPosts/MyPostsContainer';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {

	const isFetching = useSelector((state => state.profilePage.isFetching))

	return (

		<div >
			{isFetching && <Preloader />}
			<ProfileInfo
				profile={props.profile}
				status={props.status}
				isMe={props.isMe}
				socialIcon={props.socialIcon}
				jobIcon={props.jobIcon}
				avatarUser={props.avatarUser}
				updateUserStatus={props.updateUserStatus}

			/>
			<MyPostsContainer />
		</div>
	)
}

export default React.memo(Profile);