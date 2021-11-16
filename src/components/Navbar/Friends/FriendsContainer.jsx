
import { connect } from 'react-redux';

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


const FriendsContainer = connect(mapStateToProps)(Friends);

export default FriendsContainer;