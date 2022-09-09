import React from 'react';
import s from './ProfileInfo.module.css';

import Preloader from '../../common/preloader/preloader';
import ProfileUser from './ProfileUser/ProfileUser';
import ProfileStatus from './ProfileStatus/ProfileStatusWithHook';


const ProfileInfo = (props) => {
	if (!props.profile) return <Preloader />

	return (
		<>
			<div className={s.wrapper}>
				<ProfileUser {...props} />
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