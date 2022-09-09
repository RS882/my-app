import './index.css';
import './css_style_for_all/ResetStyle.css';
import './css_style_for_all/style_var.css'
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './App';



ReactDOM.render(<AppContainer />, document.getElementById('root'));


// rerenderEntireTee();

// store.subscribe(() => {
// 	rerenderEntireTee()
// });



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
