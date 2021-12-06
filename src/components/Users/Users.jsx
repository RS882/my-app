import React from 'react';
import s from './Users.module.css';

import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Users = (props) => {

	const toogleFollowAxios = (follow, id) => {

		!follow ?
			(axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
				withCredentials: true,
				headers: {
					'API-KEY': '578be10a-aad1-411e-a770-f4db95af6204'
				},
			})
				.then(respons => {
					if (respons.data.resultCode === 0) props.toogleFollow(id);
				}))
			: (axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
				withCredentials: true,
				headers: {
					'API-KEY': '578be10a-aad1-411e-a770-f4db95af6204'
				},
			})
				.then(respons => {
					if (respons.data.resultCode === 0) props.toogleFollow(id);
				}))
	}


	return (

		<div className={s.wrapper} >

			{props.users.map(e => {
				return (
					<div key={e.id} className={s.box}>
						<div className={s.text}>
							<div className={s.name}>{e.name}</div>
							<div className={s.status}>{e.status}</div>
							<div className={s.contry}>{'{e.location.contry}'},</div>
							<div className={s.city}>{'{e.location.city}'}</div>
						</div>
						<NavLink to={`/profile/${e.id}`}>
							<div className={s.avatar}
								style={{
									backgroundImage: e.photos.small ? `url(${e.photos.small})` : ` url(${props.avatarUser})`,
								}}>
							</div>
						</NavLink>
						<button className={`${s.btn} ${s.btn_follow}`} onClick={() => toogleFollowAxios(e.followed, e.id)}>
							{(e.followed) ? 'unfollow' : 'follow'}
						</button>
					</div>
				)

			})}
		</div >
	);

}


export default Users;