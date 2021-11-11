import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import { combineReducers, createStore } from "redux";

const reducers = combineReducers({ // аналогично старому файлу state
	dialogsPage: dialogsReducer,
	profilePage: profileReducer,
	sidebar: sidebarReducer,

});

const store = createStore(reducers);

export default store;