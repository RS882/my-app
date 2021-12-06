
import React from 'react';
import { connect } from 'react-redux';
import { changePadingtonNext, changePadingtonPrev, goEndPage, goStartPage, setTotalUsersCout, setUsers, toogleFollow } from '../../redux/usersReducer';
import Users from './Users';
import { setCurrentPage, toogleIsFetching } from './../../redux/usersReducer';
import * as axios from 'axios';
import Padington from '../common/padington/padington';
import Preloader from '../common/preloader/preloader';
import avatarUser from './../../assets/img/user3.jpg';
import { userAPI } from '../../api/api';



class UserContainer extends React.Component {
	// constructor(props) {
	// 	super(props)

	// };

	componentDidMount() {
		this.props.toogleIsFetching(true);
		userAPI.getUser(this.props.currentPage, this.props.pageSize)
			.then(data => {
				this.props.toogleIsFetching(false);
				this.props.setUsers(data.items);
				this.props.setTotalUsersCout(data.totalCount)
				// this.props.setTotalUsersCout(120)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.toogleIsFetching(true);
		this.props.setCurrentPage(pageNumber)
		userAPI.getUser(pageNumber, this.props.pageSize)
			.then(data => {
				this.props.toogleIsFetching(false);
				this.props.setUsers(data.items);
			})
	}

	onClickBtnNext = (step) => {
		this.onPageChanged(this.props.currentPage + step);
		this.props.changePadingtonNext(step)
	}

	onClickBtnPrev = (step) => {
		this.onPageChanged(this.props.currentPage - step);
		this.props.changePadingtonPrev(step);
	}

	goStartPage = () => {
		this.onPageChanged(1);
		this.props.goStartPage();
	}

	goEndPage = () => {
		this.onPageChanged(Math.ceil(this.props.totalUsersCount / this.props.pageSize));
		this.props.goEndPage();
	}


	render() {

		return (
			<>
				{this.props.isFetching && <Preloader />}
				<Padington
					currentPage={this.props.currentPage}
					totalUsersCount={this.props.totalUsersCount}
					pageSize={this.props.pageSize}
					showPageNumbers={this.props.showPageNumbers}
					onPageChanged={this.onPageChanged}
					onClickBtnNext={this.onClickBtnNext}
					onClickBtnPrev={this.onClickBtnPrev}
					goStartPage={this.goStartPage}
					goEndPage={this.goEndPage}
				/>
				<Users
					users={this.props.users}
					toogleFollow={this.props.toogleFollow}
					avatarUser={this.props.avatarUser}
				/>

			</>
		);

	}
}


const mapStateToProps = (state) => {
	return {
		users: state.usersPage.users,
		pageSize: state.usersPage.pageSize,
		totalUsersCount: state.usersPage.totalUsersCount,
		currentPage: state.usersPage.currentPage,
		showPageNumbers: state.usersPage.showPageNumbers,
		isFetching: state.usersPage.isFetching,
		avatarUser,
	}
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		toogleFollow: (usersID) => dispatch(toogleFollowAC(usersID)),
// 		setUsers: (users) => dispatch(setUsersAC(users)),
// 		setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
// 		setTotalUsersCout: (totalUsersCout) => dispatch(setTotalUsersCoutAC(totalUsersCout)),
// 		changePadingtonNext: (countPages) => dispatch(changePadingtonNextAC(countPages)),
// 		changePadingtonPrev: (countPages) => dispatch(changePadingtonPrevAC(countPages)),
// 		goStartPage: () => dispatch(goStartPageAC()),
// 		goEndPage: () => dispatch(goEndPageAC()),
// 		toogleIsFetching: (isFetching) => dispatch(toogleIsFetchingAC(isFetching)),
// 	}
// }

const UsersContainer = connect(mapStateToProps,
	{
		toogleFollow,
		setUsers,
		setCurrentPage,
		setTotalUsersCout,
		changePadingtonNext,
		changePadingtonPrev,
		goStartPage,
		goEndPage,
		toogleIsFetching,
	})(UserContainer);

export default UsersContainer;