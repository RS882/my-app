import React from 'react';
import Social from '../../../common/social/social';
import s from './ProfileUser.module.css';

const ProfileUserInfo = (props) => {

	return (
		<>

			<div className={s.fullname}>{props.profile.fullName}</div>
			{props.profile.aboutMe ? <article className={s.about} >{props.profile.aboutMe}	</article> : null}
			{props.profile.lookingForAJob &&
				(<div hidden={props.profile.lookingForAJob} className={s.job}>
					<div className={s.looking}>
						<img className={s.img} src={props.jobIcon} alt='Looking for a job' />
					</div>
					<article className={s.about} >{props.profile.lookingForAJobDescription}</article>
				</div>)}

			<Social social={props.social} />
		</>
	);
};

export default React.memo(ProfileUserInfo);