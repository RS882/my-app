// action type

export const SET_ERROR_MESSAGE_ALL = `SET_ERROR_MESSAGE_ALL`;
export const DEL_ERROR_MESSAGE_ALL = `DEL_ERROR_MESSAGE_ALL`;

// reducer
const initialState = {
	errorMessage: null,

}


const errorReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_ERROR_MESSAGE_ALL:
			return {
				...state,
				errorMessage: action.error,
			};
		case DEL_ERROR_MESSAGE_ALL:
			return {
				...state,
				errorMessage: null,
			};

		default:
			return state;
	}

}
//ActionCreation


export const setErrorMessageAll = (error) => ({ type: SET_ERROR_MESSAGE_ALL, error, });
export const delErrorMessageAll = () => ({ type: DEL_ERROR_MESSAGE_ALL, });


export const errorFunction = (dispatch, error, changeIsFetching) => {
	dispatch(changeIsFetching(false));
	dispatch(setErrorMessageAll(error))
	console.log(error.message)
}

//ThunkCreation



//-------------------------------------
export default errorReducer;