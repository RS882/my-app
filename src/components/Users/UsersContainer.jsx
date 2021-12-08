
import React from 'react';
import { connect } from 'react-redux';
import { changePadingtonNext, changePadingtonPrev, goEndPage, goStartPage, } from '../../redux/usersReducer';
import Users from './Users';
import { getUsers, onPageChanged, toogleFollowBtn } from './../../redux/usersReducer';

import Padington from '../common/padington/padington';
import Preloader from '../common/preloader/preloader';
import avatarUser from './../../assets/img/user3.jpg';




class UserContainer extends React.Component {
	// constructor(props) {
	// 	super(props)

	// };

	componentDidMount() {
		this.props.getUsers(this.props.currentPage, this.props.pageSize);
	}



	onClickBtnNext = (step) => {
		this.props.onPageChanged(this.props.currentPage + step);
		this.props.changePadingtonNext(step)
	}

	onClickBtnPrev = (step) => {
		this.props.onPageChanged(this.props.currentPage - step);
		this.props.changePadingtonPrev(step);
	}

	goStartPage = () => {
		this.props.onPageChanged(1);
		this.props.goStartPage();
	}

	goEndPage = () => {
		this.props.onPageChanged(Math.ceil(this.props.totalUsersCount / this.props.pageSize));
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
					onPageChanged={this.props.onPageChanged}
					onClickBtnNext={this.onClickBtnNext}
					onClickBtnPrev={this.onClickBtnPrev}
					goStartPage={this.goStartPage}
					goEndPage={this.goEndPage}
				/>
				<Users
					users={this.props.users}
					avatarUser={this.props.avatarUser}
					followInProgres={this.props.followInProgres}
					toogleFollowBtn={this.props.toogleFollowBtn}
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
		followInProgres: state.usersPage.followInProgres,
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

export default connect(mapStateToProps,
	{
		changePadingtonNext,
		changePadingtonPrev,
		goStartPage,
		goEndPage,
		getUsers,
		onPageChanged,
		toogleFollowBtn,
	})(UserContainer);
