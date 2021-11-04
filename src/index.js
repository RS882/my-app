import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addMessage, addPosts, delMessageValue, delPostValue, onMessageChange, updateNewPostText, subscribe } from './redux/state';
import { BrowserRouter, Route } from "react-router-dom";

const rerenderEntireTee = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state}
					addPosts={addPosts}
					updateNewPostText={updateNewPostText}
					onMessageChange={onMessageChange}
					addMessage={addMessage}
					delPostValue={delPostValue}
					delMessageValue={delMessageValue}
				/>
			</BrowserRouter >
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTee(state);

subscribe(rerenderEntireTee);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
