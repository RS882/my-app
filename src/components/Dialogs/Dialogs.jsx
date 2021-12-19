import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';


const Dialogs = (props) => {

	const dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />);
	const messageElements = props.messeges.map(m => <Message message={m.message} author={m.author} key={m.id} />);
	//newMessageElement = React.createRef(), - не рекомендцутся использовать



	return (
		<div className={s.dialogs}>
			<ul className={s.dialogsItem}>
				{dialogElements}
			</ul>
			<ul className={s.masseges}>
				{messageElements}
				<li className={s.inputpost}>
					<textarea
						onChange={(e) => props.updateNewMessageText(e.target.value)}
						onFocus={() => props.delMessageValue()}
						//ref={newMessageElement}
						className={s.postsarea}
						value={props.newTextMessage}
					/>

					<button
						onClick={() => props.addMessage()}
						className={s.button}
					>send</button>
				</li>
			</ul>

		</div>

	);
}
export default Dialogs;