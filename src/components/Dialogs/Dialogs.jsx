import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { Field, Form } from 'react-final-form';


const Dialogs = (props) => {

	const dialogElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} avatar={d.avatar} key={d.id} />);
	const messageElements = props.messeges.map(m => <Message message={m.message} author={m.author} key={m.id} />);
	//newMessageElement = React.createRef(), - не рекомендцутся использовать


	return (
		<div className={s.dialogs}>
			<ul className={s.dialogsItem}>
				{dialogElements}
			</ul>
			<div className={s.masseges}>
				{messageElements}
				{/* <li className={s.inputpost}> */}
				{/* <textarea
						onChange={(e) => props.updateNewMessageText(e.target.value)}
						onFocus={() => props.delMessageValue()}
						//ref={newMessageElement}
						className={s.postsarea}
						value={props.newTextMessage}
					/>

					<button
						onClick={() => props.addMessage()}
						className={s.button}
					>send</button> */}
				<AddMessageForm
					addMessage={props.addMessage}
					newTextMessage={props.newTextMessage}
					delMessageValue={props.delMessageValue} />
				{/* </li> */}
			</div>

		</div>

	);
}

const AddMessageForm = (props) => {
	let formData = {
		newTextMessage: props.newTextMessage,
	}
	return (
		<Form
			onSubmit={(values) => {
				props.addMessage(values.newTextMessage)
			}}
			initialValues={{
				...formData
			}}
			render={({ handleSubmit }) =>
				<form className={s.inputpost} onSubmit={handleSubmit}>
					<Field
						component='textarea'
						name='newTextMessage'
						onFocus={props.delMessageValue}
						className={s.postsarea}
					/>
					<button className={s.button}>send</button>
				</form >
			}
		/>
	)
}

export default Dialogs;