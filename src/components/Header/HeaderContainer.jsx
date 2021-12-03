import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import logo from './../../assets/img/logo.jpg'
import Header from './Header';
import { setAuthUser, setUserProfile } from './../../redux/authReducer';
import avatarUser from './../../assets/img/user3.jpg';

class HeaderContainer extends React.Component {

	componentDidMount() {

		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(respons => {
				if (respons.data.resultCode === 0) {
					const { id, email, login, } = respons.data.data;
					this.props.setAuthUser(id, email, login)
					return id;
				}

			})
			.then(id => {

				axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
					.then(respons => {
						this.props.setUserProfile(respons.data)

					})
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
	isAuth: state.auth.isAuth,
	logo,
	img: (state.auth.profile) && state.auth.profile.photos.small,
})


export default connect(mapStateToProps, { setAuthUser, setUserProfile })(HeaderContainer);
