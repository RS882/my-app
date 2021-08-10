import s from './Navbar.module.css';

const Navbar = () => {
	return (
		<nav className={s.nav}>
			<ul className={s.items}>
				<li className={s.item}> <a>profile</a></li>
				<li className={s.item}><a>messages</a></li>
				<li className={s.item}><a>news</a></li>
				<li className={s.item}><a>music</a></li>
				<li className={s.item}><a>settings</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;