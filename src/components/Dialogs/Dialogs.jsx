
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { addMessageActionCreation, updateNewMessageTextActionCreation, delMessageValueActionCreation } from '../../redux/state';



const Dialogs = (props) => {

	const dialogElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} />),
		messageElements = props.state.messeges.map(m => <Message message={m.message} author={m.author} />),
		//newMessageElement = React.createRef(), - не рекомендцутся использовать
		addMessage = () => {
			props.dispatch(addMessageActionCreation());
		},
		onMessageChange = (e) => {
			const text = e.target.value
			//const text = newMessageElement.current.value;
			props.dispatch(updateNewMessageTextActionCreation(text));
		},
		delMessageValue = () => {
			props.dispatch(delMessageValueActionCreation());
		};

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
						value={props.state.newTextMessage}
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