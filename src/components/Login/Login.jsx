import s from './Login.module.css';
import React from 'react';
import { Form, Field } from 'react-final-form'
import { required, emailValid, composeValidators } from './../../utilits/validators';
import { Input } from '../common/formControl/formControl';
import { connect } from 'react-redux';
import { loginUser, delErrorMessage, delRedirectLoginUrl } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import Preloader from './../common/preloader/preloader';
import Modal from '../common/modal/modal';


class Login extends React.Component {

	componentWillUnmount() {
		this.props.delRedirectLoginUrl()
	}

	onSubmit = (formData) => this.props.loginUser(formData)

	closeModal = () => {
		this.props.delErrorMessage();
		this.capchaUrl = (this.props.capcha) ? this.props.capcha : null;
	}

	render() {
		const isError = this.props.errorMessage && this.props.errorMessage.length > 0;
		if (this.props.isAuth) { return <Redirect to={this.props.redirectUrl || `/profile`} /> };
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
	{ loginUser, delErrorMessage, delRedirectLoginUrl, })(Login);

//----------------------------------
const LoginForm = (props) => {
	let formData = {
		email: ``,
		password: ``,
		rememberMe: false,
		captcha: null,
	};

	return (
		<Form
			onSubmit={(values, form) => {
				props.onSubmit(values)
				props.isError && form.restart()

			}}
			initialValues={{ ...formData, }}
			render={({ handleSubmit, form, submitting, pristine, errors }) => {
				return (
					<form onSubmit={handleSubmit} className={s.form}>
						<div>
							<Field
								component={Input}
								validate={composeValidators(required, emailValid)}
								name='email'
								className={s.input}
								placeholder='Email'
							/>
						</div>
						<div>
							<Field
								component={Input}
								validate={required}
								name='password'
								type='password'
								className={s.input}
								placeholder='Password' />
						</div>
						<div className={`${s.input} ${s.remember}`}>
							<Field
								id='login_remember'
								component={Input}
								name='rememberMe'
								className={s.checkbox}
								type='checkbox' />
							<label htmlFor='login_remember' className={s.label} >remember me</label>
						</div>
						{props.capchaUrl &&
							<>
								<div className={s.capchaBox}>
									<img src={props.capchaUrl} alt={`capcha`} />
								</div>
								<div>
									<Field
										component={Input}
										validate={required}
										name='captcha'
										className={s.input}
										placeholder='Enter capcha text'
									/>
								</div>
							</>
						}
						<div className={s.buttons}>
							<div className={s.button}>
								<button
									type="submit"
									className={`${s.input} ${s.btn} `}
									disabled={submitting || pristine || Object.keys(errors).length > 0}
								>submit</button>
							</div>
							<div className={s.button}>
								<button
									type="button"
									className={`${s.input} ${s.btn}`}
									onClick={form.restart}
									disabled={submitting || pristine}
								>Reset</button>
							</div>
						</div>
					</form >
				)
			}}
		/>
	)
}

