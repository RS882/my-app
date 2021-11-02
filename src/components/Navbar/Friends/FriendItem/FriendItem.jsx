import { NavLink } from 'react-router-dom';
import s from './FriendItem.module.css';

const FriendItem = (props) => {
	const path = `/friends/${props.id}`;

	return (
		<li className={s.frend}>

			<NavLink to={path} activeClassName={s.activeLink} className={s.link}>
				<div style={{ background: props.avatar }} className={s.avatar}></div>
				{props.name}
			</NavLink>
		</li>
	)
}


export default FriendItem;