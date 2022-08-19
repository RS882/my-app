import React from 'react';
import s from './ProfileInfo.module.css';
// import bg from './../../../assets/img/bg.jpg'
import Preloader from '../../common/preloader/preloader';
import ProfileUser from './ProfileUser/ProfileUser';
import ProfileStatus from './ProfileStatus/ProfileStatusWithHook';
import AvatarChange from '../AvatarChange/AvatarChange';
import { updateUserAvatar } from '../../../redux/profileReducer';

const ProfileInfo = (props) => {





	if (!props.profile) return <Preloader />

	return (
		<>
			<div className={s.wrapper}>
				<ProfileUser {...props} />
			</div>
			<div>
				{props.isMe ? <AvatarChange saveAvatar={props.saveAvatar} /> : null}
			</div>
			<div className={s.wrapper}>
				<ProfileStatus
					status={props.status}
					isMe={props.isMe}
					updateUserStatus={props.updateUserStatus} />
			</div>
		</>
	)
}

export default React.memo(ProfileInfo);