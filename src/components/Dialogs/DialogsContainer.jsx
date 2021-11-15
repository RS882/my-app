import React from 'react';
import { addMessageActionCreation, updateNewMessageTextActionCreation, delMessageValueActionCreation } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

	const state = props.store.getState().dialogsPage;


	const onMessage = () => props.store.dispatch(addMessageActionCreation()),
		onMessageChange = (text) => props.store.dispatch(updateNewMessageTextActionCreation(text)),
		onDelMessageValue = () => props.store.dispatch(delMessageValueActionCreation());

	return (
		<Dialogs
			onMessage={onMessage}
			onMessageChange={onMessageChange}
			onDelMessageValue={onDelMessageValue}
			dialogs={state.dialogs}
			messeges={state.messeges}
			newTextMessage={state.newTextMessage}
		/>

	);
}
export default DialogsContainer;