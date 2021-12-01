import React from 'react';
import s from './ProfileInfo.module.css';
import bg from './../../../assets/img/bg.jpg'
import Preloader from '../../common/preloader/preloader';
import ProfileUser from './ProfileUser/ProfileUser';

const ProfileInfo = (props) => {
	if (!props.profile) return <Preloader />

	return (
		< >
			<div className={s.img_box}>
				<img className={s.img} src={bg}
					alt='background' />
			</div>
			<ProfileUser {...props} />

		</>
	)
}

export default ProfileInfo;