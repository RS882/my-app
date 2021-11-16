
import StoreContext from '../../../storeContext/storeContext';
import Friends from './Friends';


const FriendsContainer = () => {

	return (
		<StoreContext.Consumer>
			{(store) => <Friends friends={store.getState().sidebar.friends} />}
		</StoreContext.Consumer>
	)
}

export default FriendsContainer;