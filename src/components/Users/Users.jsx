import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import avatarUser from './../../assets/img/user3.jpg'


class Users extends React.Component {
	constructor(props) {
		super(props)
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(respons => {

				this.props.setUsers(respons.data.items);
			})
	};


	render() {
		return (
			<div className={s.wrapper}>

				{this.props.users.map(e => {
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

							<button className={`${s.btn} ${s.btn_follow}`} onClick={() => this.props.toogleFollow(e.id)}>
								{(e.followed) ? 'unfollow' : 'follow'}
							</button>
						</div>
					)

				})}
			</div >
		);

	}
}

export default Users;