import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import clickTargetReducer from "./clickTargerReducer";

const reducers = combineReducers({ // аналогично старому файлу state
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,
	clickTarget: clickTargetReducer,

});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;