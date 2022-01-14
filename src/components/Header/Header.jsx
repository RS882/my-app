import React from 'react';
import s from './Header.module.css';

import { NavLink } from 'react-router-dom';


const Header = (props) => {

	return (
		<header className={s.header}>
			<div className={s.img_box}>
				<img src={props.logo} className={s.img} alt='logo' />
			</div>

			<div className={s.wrraper}>



				{props.isAuth ?
					(<div className={s.login_box}>
						<ul className={s.user}>
							<li className={s.text}>Current User:</li>
							<li className={s.name}>
								{props.login}
							</li>
						</ul>
						<NavLink onClick={props.showMyProfile} to={`/profile/${props.id}`}>
							<div className={s.img_box_log}>
								<img className={s.img_log} src={props.img} alt='avatar' />
							</div>
						</NavLink>

						<div className={
							props.isFetching ? `${s.img_box_logout} ${s.logout}`
								: `${s.img_box_login} ${s.logout}`
						}>
							<button
								onClick={props.logoutUser}
								disabled={props.isFetching}
								className={s.login}>
								logout</button>
						</div>

					</div>)

					: (<NavLink to={'/login'} className={s.img_box_login} title='Login'>
						<div className={s.login}>
							login
						</div>
					</NavLink>)}
			</div>

		</header>

	)
}

export default Header;
