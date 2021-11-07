import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { BrowserRouter, Route } from "react-router-dom";

const rerenderEntireTee = (store) => {

	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App store={store}
				/>
			</BrowserRouter >
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTee(store);
store.rerenderEntireTee = rerenderEntireTee;



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
