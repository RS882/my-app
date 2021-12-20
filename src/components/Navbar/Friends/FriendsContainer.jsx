
import { connect } from 'react-redux';
// import React from 'react';
import Friends from './Friends';


// const FriendsContainer = () => {

// 	return (
// 		<StoreContext.Consumer>
// 			{(store) => <Friends friends={store.getState().sidebar.friends} />}
// 		</StoreContext.Consumer>
// 	)
// }
const mapStateToProps = (state) => {
	return {
		friends: state.sidebar.friends,

	}
};

// const mapDispatchToProps = (dispatch) => {
// 	return {

// 	}
// }




export default connect(mapStateToProps)(Friends);