import React from 'react';
import { addMessageActionCreation, updateNewMessageTextActionCreation, delMessageValueActionCreation } from '../../redux/dialogsReducer';
import StoreContext from '../../storeContext/storeContext';
import Dialogs from './Dialogs';


const DialogsContainer = () => {



	return (

		<StoreContext.Consumer>
			{(store) => {
				const state = store.getState().dialogsPage;

				const onMessage = () => store.dispatch(addMessageActionCreation()),
					onMessageChange = (text) => store.dispatch(updateNewMessageTextActionCreation(text)),
					onDelMessageValue = () => store.dispatch(delMessageValueActionCreation());
				return (
					<Dialogs
						onMessage={onMessage}
						onMessageChange={onMessageChange}
						onDelMessageValue={onDelMessageValue}
						dialogs={state.dialogs}
						messeges={state.messeges}
						newTextMessage={state.newTextMessage}
					/>
				)
			}
			}

		</StoreContext.Consumer>
	);
}
export default DialogsContainer;