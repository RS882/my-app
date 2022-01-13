import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { Textarea } from './../common/formControl/formControl';
import { composeValidators, maxLength, required } from '../../utilits/validators';


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

				<AddMessageForm
					addMessage={props.addMessage}
					newTextMessage={props.newTextMessage}
					delMessageValue={props.delMessageValue} />

			</div>

		</div>

	);
}

const AddMessageForm = (props) => {
	let formData = { newTextMessage: props.newTextMessage, }
	const maxLength50 = maxLength(50)
	return (
		<Form
			onSubmit={(values, form) => {
				props.addMessage(values.newTextMessage)
				form.resetFieldState('newTextMessage')
			}}
			initialValues={{
				...formData
			}}
			render={({ handleSubmit, submitting, errors, pristine }) =>
				<form className={s.inputpost} onSubmit={handleSubmit}>
					<Field
						component={Textarea}
						validate={composeValidators(required, maxLength50)}
						name='newTextMessage'
						onFocus={props.delMessageValue}
						className={s.postsarea}

					/>
					<button
						className={s.button}
						disabled={submitting || pristine || Object.keys(errors).length > 0}
					>send</button>
				</form >
			}
		/>
	)
}

export default Dialogs;