import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route } from "react-router-dom";

const rerenderEntireTee = (state) => {

	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state}
					dispatch={store.dispatch.bind(store)}// биндим сторе тк терям контекст вызова при передаче метода
				/>
			</BrowserRouter >
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTee(store.getState());
store.subscribe(() => {
	const state = store.getState();
	rerenderEntireTee(state)
});



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
