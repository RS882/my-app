import React from 'react';
import s from './Header.module.css';

import { Link } from 'react-router-dom';

const Header = (props) => {

	return (
		<header className={s.header}>
			<div className={s.img_box}>
				<img src={props.logo} className={s.img} alt='logo' />
			</div>
			<div className={s.login_box}>
				{props.isAuth ?

					<img className={s.img_log} src={props.img} alt='avatar' />
					: <Link to={'/login'} className={s.link}>Login</Link>}
			</div>
		</header>

	)
}

export default Header;
