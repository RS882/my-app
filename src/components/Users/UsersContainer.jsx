
import React from 'react';
import { connect } from 'react-redux';
import { changePadingtonNextAC, changePadingtonPrevAC, goEndPageAC, goStartPageAC, setTotalUsersCoutAC, setUsersAC, toogleFollowAC } from '../../redux/usersReducer';
import Users from './Users';
import { setCurrentPageAC } from './../../redux/usersReducer';
import * as axios from 'axios';
import Padington from './padington/padington';



class UserContainer extends React.Component {
	// constructor(props) {
	// 	super(props)

	// };

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(respons => {
				this.props.setUsers(respons.data.items);
				this.props.setTotalUsersCout(respons.data.totalCount)
				// this.props.setTotalUsersCout(120)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
			.then(respons => {
				this.props.setUsers(respons.data.items);
			})
	}

	onClickBtnNext = (step) => {
		this.onPageChanged(this.props.currentPage + step);
		this.props.changePadingtonNext(step)
	}

	onClickBtnPrev = (step) => {
		this.onPageChanged(this.props.currentPage - step);
		this.props.changePadingtonPrev(step)
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
			<div>
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
				/>
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
			</div>
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
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		toogleFollow: (usersID) => dispatch(toogleFollowAC(usersID)),
		setUsers: (users) => dispatch(setUsersAC(users)),
		setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
		setTotalUsersCout: (totalUsersCout) => dispatch(setTotalUsersCoutAC(totalUsersCout)),
		changePadingtonNext: (countPages) => dispatch(changePadingtonNextAC(countPages)),
		changePadingtonPrev: (countPages) => dispatch(changePadingtonPrevAC(countPages)),
		goStartPage: () => dispatch(goStartPageAC()),
		goEndPage: () => dispatch(goEndPageAC()),
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UserContainer);

export default UsersContainer;