import React from 'react';
import s from './ProfileInfo.module.css';
// import bg from './../../../assets/img/bg.jpg'
import Preloader from '../../common/preloader/preloader';
import ProfileUser from './ProfileUser/ProfileUser';
import ProfileStatus from './ProfileStatus/ProfileStatus';

const ProfileInfo = (props) => {
	if (!props.profile) return <Preloader />

	return (
		<>
			{/* <div className={s.img_box}>
				<img className={s.img} src={bg}
					alt='background' />
			</div> */}
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

export default ProfileInfo;