
import React from 'react';
import { connect } from 'react-redux';
import logo from './../../assets/img/logo.jpg'
import Header from './Header';
import { setAuthUser, setUserProfileAuth } from './../../redux/authReducer';
import avatarUser from './../../assets/img/user3.jpg';
import { loginAPI, profileAPI } from '../../api/api';


class HeaderContainer extends React.Component {

	componentDidMount() {

		loginAPI.getAuthUser()
			.then(data => {
				if (data.resultCode === 0) {
					const { id, email, login, } = data.data;
					this.props.setAuthUser(id, email, login)

					return id;
				}
			})
			.then(id => {
				profileAPI.getProfile(id)
					.then(data => this.props.setUserProfileAuth(data))
			})
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
	logo,

	img: (state.auth.profile) && state.auth.profile.photos.small,
})


export default connect(mapStateToProps, { setAuthUser, setUserProfileAuth })(HeaderContainer);
