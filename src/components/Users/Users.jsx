import React from 'react';
import s from './Users.module.css';

import { NavLink } from 'react-router-dom';




const Users = (props) => {

	return (
		<div className={s.wrapper} >

			{props.users.map(e => {

				const buttonDisebled = props.isBtnDisebled || props.followInProgres.includes(e.id);

				return (
					<div key={e.id} className={s.box}>
						<div className={s.text}>
							<div className={s.name}>{e.name}</div>
							<div className={s.status}>{e.status}</div>
							{/* <div className={s.contry}>{'{e.location.contry}'},</div>
							<div className={s.city}>{'{e.location.city}'}</div> */}
						</div>
						<NavLink to={`/profile/${e.id}`}>
							<div className={s.avatar}
								style={{
									backgroundImage: e.photos.small ? `url(${e.photos.small})` : ` url(${props.avatarUser})`,
								}}>
							</div>
						</NavLink>
						<button className={`${s.btn} ${s.btn_follow}`}
							disabled={buttonDisebled}
							style={{
								backgroundColor: buttonDisebled && '#edffd9',
								color: buttonDisebled && '#bed1a8',
								cursor: buttonDisebled && 'auto',
							}}
							onClick={() => props.toogleFollowBtn(e.followed, e.id)}>
							{(e.followed) ? 'unfollow' : 'follow'}
						</button>
					</div>
				)

			})}
		</div >
	);

}


export default Users;