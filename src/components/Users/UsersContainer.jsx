
// import React from 'react';
import { connect } from 'react-redux';
import { setTotalUsersCoutAC, setUsersAC, toogleFollowAC } from '../../redux/usersReducer';
import Users from './Users';
import { setCurrentPageAC } from './../../redux/usersReducer';


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		showPageNumbers: state.usersPage.showPageNumbers,
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toogleFollow: (usersID) => dispatch(toogleFollowAC(usersID)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
		setTotalUsersCout: (totalUsersCout) => dispatch(setTotalUsersCoutAC(totalUsersCout)),
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;