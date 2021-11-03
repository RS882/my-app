
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';




const Dialogs = (props) => {



	const dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />),
		messageElements = props.state.messeges.map(m => <Message message={m.message} author={m.author} />),
		newMessageElement = React.createRef(),
		addMessage = () => {
			props.addMessage();
		},
		onMessageChange = () => {
			const text = newMessageElement.current.value;
			props.onMessageChange(text);
		},
		delMessageValue = () => {
			props.delMessageValue();
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
				<textarea
					onChange={onMessageChange}
					onFocus={delMessageValue}
					ref={newMessageElement}
					className={s.postsarea}
					value={props.state.newTextMessage}
				/>

				<button onClick={addMessage} className={s.button}>add post</button>
			</div>
		</div>

	);
}
export default Dialogs;