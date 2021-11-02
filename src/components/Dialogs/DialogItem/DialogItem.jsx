import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = (props) => {
	const path = `/dialogs/${props.id}`;

	return (
		<li className={s.dialog}>

			<NavLink to={path} activeClassName={s.activeLink} className={s.link}>
				<div style={{ background: props.avatar }} className={s.avatar}></div>
				{props.name}</NavLink>
		</li>
	)
}


export default DialogItem;