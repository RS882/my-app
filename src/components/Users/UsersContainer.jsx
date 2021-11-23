
import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, toogleFollowAC } from '../../redux/usersReducer';
import Users from './Users';


const mapStateToProps = (state) => {
	return { users: state.usersPage.users, }
};

const mapDispatchToProps = (dispatch) => {
	return {
		toogleFollow: (usersID) => dispatch(toogleFollowAC(usersID)),
		setUsers: (users) => dispatch(setUsersAC(users)),

	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;