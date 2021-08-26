import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props) => {

	return (
		<div className={s.dialogs}>
			<ul className={s.dialogsItem}>
				<li className={s.dialog + ' ' + s.active}>
					<NavLink to="/dialogs/1">dima</NavLink>
				</li>
				<li className={s.dialog}>
					<NavLink to="/dialogs/2">Alex</NavLink>
				</li>
				<li className={s.dialog}>
					<NavLink to="/dialogs/3">katya</NavLink>
				</li>
				<li className={s.dialog}>
					<NavLink to="/dialogs/4">sergiy</NavLink>
				</li>
				<li className={s.dialog}>
					<NavLink to="/dialogs/5">Sveta</NavLink>
				</li>
				<li className={s.dialog}>
					<NavLink to="/dialogs/6">viktor</NavLink>
				</li>


			</ul>
			<ul className={s.masseges}>
				<li className={s.message}>Hi</li>
				<li className={s.message}>How are you?</li>
				<li className={s.message}>I'm fine</li>
				<li className={s.message}>Yo</li>
			</ul>
		</div>
	);
}
export default Dialogs;