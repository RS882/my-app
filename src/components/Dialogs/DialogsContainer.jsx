import React from 'react';
import { addMessageActionCreation, updateNewMessageTextActionCreation, delMessageValueActionCreation } from '../../redux/dialogsReducer';

import Dialogs from './Dialogs';
import { connect } from 'react-redux';

// const DialogsContainer = () => {



// 	return (

// 		<StoreContext.Consumer>
// 			{(store) => {
// 				const state = store.getState().dialogsPage;

// 				const onMessage = () => store.dispatch(addMessageActionCreation()),
// 					onMessageChange = (text) => store.dispatch(updateNewMessageTextActionCreation(text)),
// 					onDelMessageValue = () => store.dispatch(delMessageValueActionCreation());
// 				return (
// 					<Dialogs
// 						onMessage={onMessage}
// 						onMessageChange={onMessageChange}
// 						onDelMessageValue={onDelMessageValue}
// 						dialogs={state.dialogs}
// 						messeges={state.messeges}
// 						newTextMessage={state.newTextMessage}
// 					/>
// 				)
// 			}
// 			}

// 		</StoreContext.Consumer>
// 	);
// }

const mapStateToProps = (state) => {
	return {
		dialogs: state.dialogsPage.dialogs,
		messeges: state.dialogsPage.messeges,
		newTextMessage: state.dialogsPage.newTextMessage,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onMessage: () => dispatch(addMessageActionCreation()),
		onMessageChange: (text) => dispatch(updateNewMessageTextActionCreation(text)),
		onDelMessageValue: () => dispatch(delMessageValueActionCreation()),
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



export default DialogsContainer;