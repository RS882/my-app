import FriendItem from './FriendItem/FriendItem';
import s from './Friends.module.css';
import React from 'react';
const Friends = (props) => {


	const frendItem = props.friends.map(d => <FriendItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />);
	return (
		<div className={s.friends}>
			<h3 className={s.title}>
				Friends
			</h3>
			<ul className={s.friendItem}>
				{frendItem}
			</ul>
		</div>

	)
}

export default Friends;