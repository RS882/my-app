
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';




const Dialogs = (props) => {


	const dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />),
		messageElements = props.state.messeges.map(m => <Message message={m.message} author={m.author} />),
		newPostElement = React.createRef(),
		addPost = () => {
			const text = newPostElement.current.value;
			alert(text);
		};

	return (
		<div className={s.dialogs}>
			<ul className={s.dialogsItem}>
				{dialogElements}
			</ul>
			<ul className={s.masseges}>
				{messageElements}

			</ul>
			<div className={s.inputpost}>
				<textarea ref={newPostElement} className={s.postsarea}></textarea>

				<button onClick={addPost} className={s.button}>add post</button>
			</div>
		</div>

	);
}
export default Dialogs;