import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import modalReducer from "./modalReducer";
import appReducer from './appReducer';
import errorReducer from './errorReducer';

const reducers = combineReducers({ // аналогично старому файлу state
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	modalWindow: modalReducer,
	app: appReducer,
	error: errorReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;