import s from './Login.module.css';
import React from 'react';
import { Form, Field } from 'react-final-form'
import { required, emailValid, composeValidators } from './../../utilits/validators';
import { Input } from '../common/formControl/formControl';
import { connect } from 'react-redux';
import { loginUser } from './../../redux/authReducer';
import { Redirect } from 'react-router-dom';



const Login = (props) => {

	if (props.isAuth) return <Redirect to='/profile' />;


	const onSubmit = (formData) => props.loginUser(formData);
	return (
		<div className={s.login}>
			<h2 className={s.title}>login</h2>
			<LoginForm onSubmit={onSubmit} />
		</div>
	);
};

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
									disabled={submitting || Object.keys(errors).length > 0}
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
					</form>
				)
			}}
		/>
	)
}

const mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
})



export default connect(mapStateToProps, { loginUser })(Login);