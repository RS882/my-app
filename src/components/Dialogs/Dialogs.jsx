import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';

const Dialogs = (props) => {

	const dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />),
		messageElements = props.messeges.map(m => <Message message={m.message} author={m.author} />),
		//newMessageElement = React.createRef(), - не рекомендцутся использовать
		addMessage = () => props.onMessage(),
		onMessageChange = (e) => {
			const text = e.target.value;
			props.onMessageChange(text)
		},
		delMessageValue = () => props.onDelMessageValue();

	return (
		<div className={s.dialogs}>
			<ul className={s.dialogsItem}>
				{dialogElements}
			</ul>
			<ul className={s.masseges}>
				{messageElements}
				<li className={s.inputpost}>
					<textarea
						onChange={onMessageChange}
						onFocus={delMessageValue}
						//ref={newMessageElement}
						className={s.postsarea}
						value={props.newTextMessage}
					/>

					<button
						onClick={addMessage}
						className={s.button}
					>send</button>
				</li>
			</ul>

		</div>

	);
}
export default Dialogs;