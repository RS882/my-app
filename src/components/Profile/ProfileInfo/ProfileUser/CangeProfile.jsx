import React from 'react';
import btnS from './../../../../css_style_for_all/button.module.css';
import s from './ProfileUser.module.css';

const CangeProfile = (props) => {
	return (
		<button className={`${btnS.button} ${s.button_width}`} onClick={props.startProfileEditMode}>
			Cange Profile
		</button>
	);
};

export default React.memo(CangeProfile);