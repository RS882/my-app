import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { combineReducers, createStore } from "redux";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

const reducers = combineReducers({ // аналогично старому файлу state
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer,
	usersPage: usersReducer,
	auth: authReducer,

});

const store = createStore(reducers);

window.store = store;

export default store;