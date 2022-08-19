import React from 'react';
import s from './AvatarChange.module.css';

const AvatarChange = ({ saveAvatar }) => {

	const changeAvatar = (event) => {

		event.target.files.length && saveAvatar(event.target.files[0]);

	}


	return (

		<label className={s.button} onChange={changeAvatar}>
			Change your avatar
			<input hidden type="file" />
		</label>

	);
};

export default React.memo(AvatarChange);