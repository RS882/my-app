import React from 'react';
import s from './Header.module.css';

import { Link, NavLink } from 'react-router-dom';

const Header = (props) => {

	return (
		<header className={s.header}>
			<div className={s.img_box}>
				<img src={props.logo} className={s.img} alt='logo' />
			</div>

			<div className={s.wrraper}>
				{props.isAuth ?
					<div className={s.login_box}>
						<ul className={s.user}>
							<li className={s.text}>Current User:</li>
							<li className={s.name}>
								{props.login}
							</li>
						</ul>
						<NavLink to={`/profile/${props.id}`}>
							<div className={s.img_box_log}>
								<img className={s.img_log} src={props.img} alt='avatar' />
							</div>
						</NavLink>
					</div>
					: <Link to={'/login'} className={`${s.img_box_login}`} title='Login'>
						<img className={`${s.img}  ${s.loginImg}`} src={props.loginImg} alt='login' />
					</Link>}
			</div>

		</header>

	)
}

export default Header;
