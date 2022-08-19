import React, { useEffect, useState } from 'react';
import s from './ProfileStatus.module.css';

const ProfileStatus = (props) => {

	const [editMode, setEditMode] = useState(false);
	const [status, setStatus] = useState(props.status || `no status`);
	// state = {
	// 	editMode: false,
	// 	status: this.props.status || `no status`,
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	(prevProps.status !== this.props.status) && this.setState({ status: this.props.status, })
	// }

	// useEffect(() => {
	// 	setStatus(props.status)
	// }, [status]);

	const toogleEditMode = () => {
		if (props.isMe) {
			setEditMode(!editMode)
			props.updateUserStatus(status)
		}
	}
	// // this.forceUpdate(); - такую перерисовку не рекомнедуется использовать
	const selectStatus = (e) => e.target.select();// віделем содержимое input 

	const onChangeStatus = (e) => setStatus(e.target.value);



	return (
		<div className={s.wrapper}>
			<h3 className={s.title}>
				{(props.isMe) ? `my status` : `User status`}
			</h3>
			{!editMode ?
				<div className={s.status}
					style={{ cursor: (props.isMe) ? `pointer` : `auto` }}
					onDoubleClick={toogleEditMode}>
					{props.status || `no status`}
				</div> :

				<div className={s.input_box}>
					<input className={s.input}
						autoFocus={true}
						onBlur={toogleEditMode}
						onFocus={selectStatus}
						onChange={onChangeStatus}
						value={status}
					/>
				</div>
			}
		</div>
	)
		;
}


export default React.memo(ProfileStatus)