import React from 'react';
import s from './ProfileInfo.module.css';
import bg from './../../../assets/img/bg.jpg'
import Preloader from '../../common/preloader/preloader';

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader />
	}

	return (
		< >
			<div >
				<img className={s.img} src={bg}
					alt='background' />
			</div>
			<div className={s.discr}>
				<div>
					<img src={props.profile.photos.large} alt='user' />
				</div>

			</div>

		</>
	)
}

export default ProfileInfo;