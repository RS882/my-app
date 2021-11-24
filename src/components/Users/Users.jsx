import s from './Users.module.css';
import React from 'react';
import * as axios from 'axios';
import avatarUser from './../../assets/img/user3.jpg'

const Users = (props) => {

	if (props.users.length === 0) {


		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(respons => {

				props.setUsers(respons.data.items);
			})
	}
	// 	props.setUsers
	// 		([
	// 			{
	// 				id: 1,
	// 				avatar: 'red',
	// 				follow: true,
	// 				firstName: 'Dima',
	// 				status: "I'm the best",
	// 				location: { city: 'Berlin', contry: 'Germany', },
	// 			},
	// 			{
	// 				id: 2,
	// 				avatar: 'green',
	// 				follow: false,
	// 				firstName: 'Alex',
	// 				status: "I'm cool",
	// 				location: { city: 'Paris', contry: 'France', },
	// 			},
	// 			{
	// 				id: 3,
	// 				avatar: 'aqua',
	// 				follow: false,
	// 				firstName: 'Lena',
	// 				status: "I'm super",
	// 				location: { city: 'New York', contry: 'USA', },
	// 			},
	// 			{
	// 				id: 4,
	// 				avatar: 'blueviolet',
	// 				follow: true,
	// 				firstName: 'Oleg',
	// 				status: "I'm boss",
	// 				location: { city: 'Warsawa', contry: 'Poland', },
	// 			},
	// 		])
	// }


	return (
		<div className={s.wrapper}>

			{props.users.map(e => {
				return (
					<div key={e.id} className={s.box}>
						<div className={s.text}>
							<div className={s.name}>{e.name}</div>
							<div className={s.status}>{e.status}</div>
							<div className={s.contry}>{'{e.location.contry}'},</div>
							<div className={s.city}>{'{e.location.city}'}</div>
						</div>


						<div className={s.avatar}
							style={{
								backgroundImage: (e.photos.small) ? e.photos.small : ` url(${avatarUser})`,
							}}>
						</div>

						<button className={s.btn} onClick={() => props.toogleFollow(e.id)}>
							{(e.followed) ? 'unfollow' : 'follow'}
						</button>
					</div>
				)

			})}
		</div >
	);
}
export default Users;