import React from 'react';
import s from './ProfileInfo.module.css';
import bg from './../../../assets/img/bg.jpg'

const ProfileInfo = () => {
	return (
		<div >
			<div >
				<img className={s.img} src={bg}
					alt='background' />
			</div>
			<div className={s.discr}>
				ava+discr
			</div>

		</div>
	)
}

export default ProfileInfo;