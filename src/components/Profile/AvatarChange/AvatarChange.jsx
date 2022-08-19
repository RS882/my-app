import React from 'react';
import s from './AvatarChange.module.css';
import btnS from './../../../css_style_for_all/button.module.css';
import { useDispatch } from 'react-redux';
import { updateUserAvatar } from '../../../redux/profileReducer';

const AvatarChange = () => {


	const dispatch = useDispatch();

	const changeAvatar = (event) => {
		event.target.files.length && dispatch(updateUserAvatar(event.target.files[0]));
	};
	return (

		<label className={`${btnS.button} ${s.button_width}`} onChange={changeAvatar}>
			Change avatar
			<input hidden type="file" />
		</label>

	);
};

export default React.memo(AvatarChange);