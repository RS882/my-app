import s from './Login.module.css';
import React from 'react';

import { connect } from 'react-redux';
import { loginUser, delErrorMessage } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import Preloader from './../common/preloader/preloader';
import Modal from '../common/modal/modal';

import LoginForm from './../forms/loginForm/LoginForm';

class Login extends React.Component {


	onSubmit = (formData) => this.props.loginUser(formData)

	closeModal = () => {
		this.props.delErrorMessage();
		this.capchaUrl = (this.props.capcha) ? this.props.capcha : null;
	}

	render() {

		const isError = this.props.errorMessage && this.props.errorMessage.length > 0;

		if (this.props.isAuth) {

			return <Redirect to={this.props.redirectUrl || `/profile`} />
		};
		return (
			<div className={s.login}>
				<h2 className={s.title}>login</h2>
				<LoginForm isError={isError}
					capchaUrl={this.capchaUrl}
					onSubmit={this.onSubmit} />
				{this.props.isFetching && <Preloader />}
				{isError && <Modal closeModal={this.closeModal} content={this.props.errorMessage} />}
			</div>
		);
	}

};


const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	isFetching: state.auth.isFetching,
	errorMessage: state.auth.errorMessage,
	capcha: state.auth.capcha,
	redirectUrl: state.auth.loginRedirectUrl,
})

export default connect(mapStateToProps,
	{ loginUser, delErrorMessage, })(Login);

//----------------------------------

