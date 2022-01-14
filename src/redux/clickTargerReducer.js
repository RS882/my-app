// action type


const SET_CLICK_TARGET = `SET_CLICK_TARGET`;


// reducer
const initialState = {
	clickTarget: null,
}


const clickTargetReducer = (state = initialState, action) => {

	switch (action.type) {

		case SET_CLICK_TARGET:

			return {
				...state,
				clickTarget: action.target,
			};
		default:
			return state;
	}

}
//ActionCreation


export const setClickTarget = (target) => ({ type: SET_CLICK_TARGET, target, });

//ThunkCreation


//-------------------------------------
export default clickTargetReducer;