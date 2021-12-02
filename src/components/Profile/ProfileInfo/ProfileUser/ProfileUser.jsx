import React from 'react';
import Social from '../../../common/social/social';
import s from './ProfileUser.module.css';


const ProfileUser = (props) => {

	return (

		<div className={s.wrapper}>
			<div className={s.user_info}>
				<div className={s.img_box}>
					<img className={s.img} src={props.profile.photos.large} alt='user' />
				</div>
				<div className={s.fullname}>{props.profile.fullName}</div>
				<article className={s.about} >{props.profile.aboutMe}	</article>
			</div>

			{props.profile.lookingForAJob &&
				(<div hidden={props.profile.lookingForAJob} className={s.job}>
					<div className={s.looking}>
						<img className={s.img} src={props.jobIcon} alt='Looking for a job' />
					</div>
					<article className={s.about} >{props.profile.lookingForAJobDescription}</article>
				</div>)}

			<Social social={props.social} vertical={true} />

		</div>


	)
}

export default ProfileUser;