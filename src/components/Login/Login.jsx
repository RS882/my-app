import s from './Login.module.css';
import React from 'react';
import { Form, Field } from 'react-final-form'
import { required, emailValid, composeValidators } from './../../utilits/validators';
import { Input } from '../common/formControl/formControl';
import { connect } from 'react-redux';
import { loginUser, delErrorMessage } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';
import Preloader from './../common/preloader/preloader';
import Modal from '../common/modal/modal';



class Login extends React.Component {



	onSubmit = (formData) => this.props.loginUser(formData);


	render() {


		if (this.props.isAuth) return <Redirect to='/profile' />;
		const ddd = [`eiieiowezz saddADAS DdsADAfsFSSFSFAS Fasfio`,
			`kaksakskei ieiowezzsaddAD ASDdsADAfsFSSFSFASFas fioeiieiowezzsaddADASDdsADAfsFSSFSFASFasfio
		 `, `lllleiieiowezzsaddADA SDdsADAfsFS SFSFASFasfioss`]
		return (
			<div className={s.login}>
				<h2 className={s.title}>login</h2>
				<LoginForm onSubmit={this.onSubmit} />
				{this.props.isFetching && <Preloader />}
				{(this.props.errorMessadge && this.props.errorMessadge.length > 0)
					&& <Modal closeModal={this.props.delErrorMessage} content={ddd} />}
			</div>
		);
	}

};


const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	isFetching: state.auth.isFetching,
	errorMessadge: state.auth.errorMessadge,
})


export default connect(mapStateToProps, { loginUser, delErrorMessage })(Login);

//----------------------------------
const LoginForm = (props) => {
	let formData = {
		email: ``,
		password: ``,
		rememberMe: false,
	};
	return (
		<Form
			onSubmit={(values, form) => {
				props.onSubmit(values)
				form.restart()
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

