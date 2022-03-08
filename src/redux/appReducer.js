import { getAuthUser } from "./authReducer";


// action type
const INITIALIZATED_SUCCESS = `INITIALIZATED_SUCCESS`;

// reducer
const initialState = {
	initializated: false,
}


const appReducer = (state = initialState, action) => {

	switch (action.type) {
		case INITIALIZATED_SUCCESS:
			return {
				...state,
				initializated: true,
			};

		default:
			return state;
	}

}
//ActionCreation

export const initializatedSuccess = () => ({ type: INITIALIZATED_SUCCESS, });


// ThunkCreation
export const initializApp = () => (dispatch) => {

	Promise.all([dispatch(getAuthUser()),])
		.then(() => {

			dispatch(initializatedSuccess())
		})
}



//-------------------------------------
export default appReducer;