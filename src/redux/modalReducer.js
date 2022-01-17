// action type

const IS_MODAL_OPEN = `IS_MODAL_OPEN`;
const IS_CLICK_MODAL = `IS_CLICK_MODAL`;
const CLOSE_MODAL = `CLOSE_MODAL`;

// reducer
const initialState = {
	isModalOpen: false,
	isClickNotOnModal: false,
}



const modalReducer = (state = initialState, action) => {

	switch (action.type) {

		case IS_MODAL_OPEN:
			return {
				...state,
				isModalOpen: true,
			};
		case IS_CLICK_MODAL:

			return {
				...state,
				isClickNotOnModal: state.isModalOpen ? true : false,
			};
		case CLOSE_MODAL:

			return {
				...state,
				isModalOpen: false,
				isClickNotOnModal: false,
			};

		default:
			return state;
	}

}
//ActionCreation


export const setIsModalOpen = () => ({ type: IS_MODAL_OPEN, });
export const setIsClickModal = () => ({ type: IS_CLICK_MODAL, });
export const setCloseModal = () => ({ type: CLOSE_MODAL, });

//ThunkCreation



//-------------------------------------
export default modalReducer;