
import React from 'react';
import { connect, useDispatch } from 'react-redux';
import logo from './../../assets/img/logo.jpg'
import Header from './Header';
import { logoutUser } from './../../redux/authReducer';
import avatarUser from './../../assets/img/user3.jpg';
import { setUserProfile, getUserStatus } from './../../redux/profileReducer';
import { compose } from 'redux';
import { useLocation, withRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';


const HeaderContainer = (props) => {
	const login = useSelector(state => state.auth.login);
	const id = useSelector(state => state.auth.userId);
	const isAuth = useSelector(state => state.auth.isAuth);
	const isFetching = useSelector(state => state.auth.isFetching);
	const myProfile = useSelector(state => state.auth.profile);
	const img = useSelector(state => (state.auth.profile) ? state.auth.profile.photos.small : avatarUser);

	const pathName = useLocation().pathname
	const dispatch = useDispatch();

	const showMyProfile = () => {
		dispatch(setUserProfile(myProfile))
		if ((/profile/i).test(pathName)) {
			dispatch(getUserStatus(id))
		}
	};
	const logOut = () => dispatch(logoutUser())

	return (
		<Header login={login}
			isAuth={isAuth}
			isFetching={isFetching}
			img={img}
			showMyProfile={showMyProfile}
			logoutUser={logOut}
			logo={logo}
			id={id} />
	)
}

export default HeaderContainer;


// class HeaderContainer extends React.Component {



// 	showMyProfile = () => {
// 		this.props.setUserProfile(this.props.myProfile)

// 		if ((/profile/i).test(this.props.location.pathname)) {
// 			this.props.getUserStatus(this.props.id)
// 		}
// 	}

// 	render() {

// 		return (

// 			<Header {...this.props} img={this.props.img ? this.props.img : avatarUser}
// 				showMyProfile={this.showMyProfile} />

// 		)
// 	}
// }

// const mapStateToProps = (state) => ({
// 	login: state.auth.login,
// 	id: state.auth.userId,
// 	isAuth: state.auth.isAuth,
// 	isFetching: state.auth.isFetching,
// 	logo,
// 	myProfile: state.auth.profile,
// 	img: (state.auth.profile) && state.auth.profile.photos.small,

// })


// export default compose(
// 	connect(mapStateToProps, { setUserProfile, getUserStatus, logoutUser }),
// 	withRouter
// )(HeaderContainer);
