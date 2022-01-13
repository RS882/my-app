import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { Textarea } from './../common/formControl/formControl';
import { composeValidators, maxLength, required } from '../../utilits/validators';
import TextareaForm from './../forms/TextareaForm/TextareaForm';


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
				<TextareaForm
					delValue={props.delMessageValue}
					addValue={props.addMessage}
					newTextValue={props.newTextMessage}
					nameForm={`newTextMessage`}
					maxLengthText={50}
					buttonName={`send`}
				/>
			</div>
		</div>
	);
}
export default Dialogs;