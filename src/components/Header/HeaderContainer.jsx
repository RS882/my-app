
import React from 'react';
import { connect } from 'react-redux';
import logo from './../../assets/img/logo.jpg'
import Header from './Header';
import { getAuthUser } from './../../redux/authReducer';
import avatarUser from './../../assets/img/user3.jpg';
;



class HeaderContainer extends React.Component {

	componentDidMount() {

		this.props.getAuthUser();
		// loginAPI.getAuthUser()
		// 	.then(data => {
		// 		if (data.resultCode === 0) {
		// 			const { id, email, login, } = data.data;
		// 			this.props.setAuthUser(id, email, login)
		// 			return id;
		// 		}
		// 	})
		// 	.then(id => {
		// 		profileAPI.getProfile(id)
		// 			.then(data => this.props.setUserProfileAuth(data))
		// 	})
	}


	render() {

		return (

			<Header {...this.props} img={this.props.img ? this.props.img : avatarUser} />

		)
	}
}

const mapStateToProps = (state) => ({
	login: state.auth.login,
	id: state.auth.userId,
	isAuth: state.auth.isAuth,
	isFetching: state.auth.isFetching,
	logo,
	img: (state.auth.profile) && state.auth.profile.photos.small,

})


export default connect(mapStateToProps, { getAuthUser })(HeaderContainer);
