import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import React from 'react';
import FriendsContainer from './Friends/FriendsContainer';

const Navbar = () => {

	return (
		<nav className={s.nav}>
			<ul className={s.items}>
				<li className={s.item}>
					<NavLink to='/profile' activeClassName={s.activeLink}>profile</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to='/dialogs' activeClassName={s.activeLink}>messages</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to='/news' activeClassName={s.activeLink}>news</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to='/music' activeClassName={s.activeLink}>music</NavLink>
				</li>
				<li className={s.item}>
					<NavLink to='/settings' activeClassName={s.activeLink}>settings</NavLink>
				</li>
			</ul>

			<FriendsContainer />
		</nav>
	)
}

export default Navbar;