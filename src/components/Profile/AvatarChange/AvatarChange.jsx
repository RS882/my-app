import React from 'react';
import s from './AvatarChange.module.css';
import btnS from './../../../css_style_for_all/button.module.css';

const AvatarChange = ({ saveAvatar }) => {

	const changeAvatar = (event) => {
		event.target.files.length && saveAvatar(event.target.files[0]);
	};
	return (

		<label className={`${btnS.button} ${s.button_width}`} onChange={changeAvatar}>
			Change your avatar
			<input hidden type="file" />
		</label>

	);
};

export default React.memo(AvatarChange);