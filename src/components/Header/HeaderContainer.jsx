
import React from 'react';
import { connect } from 'react-redux';
import logo from './../../assets/img/logo.jpg'
import Header from './Header';
import { logoutUser } from './../../redux/authReducer';
import avatarUser from './../../assets/img/user3.jpg';
import { setUserProfile, getUserStatus } from './../../redux/profileReducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';




class HeaderContainer extends React.Component {



	showMyProfile = () => {
		this.props.setUserProfile(this.props.myProfile)
		if ((/profile/i).test(this.props.location.pathname)) {
			this.props.getUserStatus(this.props.id)
		}
	}

	render() {

		return (

			<Header {...this.props} img={this.props.img ? this.props.img : avatarUser}
				showMyProfile={this.showMyProfile} />

		)
	}
}

const mapStateToProps = (state) => ({
	login: state.auth.login,
	id: state.auth.userId,
	isAuth: state.auth.isAuth,
	isFetching: state.auth.isFetching,
	logo,
	myProfile: state.auth.profile,
	img: (state.auth.profile) && state.auth.profile.photos.small,

})


export default compose(
	connect(mapStateToProps, { setUserProfile, getUserStatus, logoutUser }),
	withRouter
)(HeaderContainer);
