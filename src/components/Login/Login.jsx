import s from './Login.module.css';
import React from 'react';
import { Form, Field } from 'react-final-form'
import { loginAPI } from '../../api/api';


const Login = (props) => {

	const onSubmit = (formData) => {
		loginAPI.loginUser(formData)
			.then(data => {

				console.log(data);
			})
		// .then(id => {
		// 	loginAPI.getAuthUser()
		// 		.then(data => console.log(data))
		// })
		// const dataJson = JSON.stringify(formData);

	}



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
			onSubmit={props.onSubmit}
			initialValues={{
				...formData,
			}}
			validate={(values) => {

				// console.log(values);
			}}
			render={({ handleSubmit, values }) => (
				<form onSubmit={handleSubmit} className={s.form}>
					<div>
						<Field
							component='input'
							name='email'
							className={s.input}
							placeholder='Email'
						/>
					</div>
					<div>
						<Field
							component='input'
							name='password'
							className={s.input}
							placeholder='Password' />
					</div>
					<div className={`${s.input} ${s.remember}`}>
						<Field
							id='login_remember'
							component='input'
							name='rememberMe'
							className={s.checkbox}
							type='checkbox' />
						<label htmlFor='login_remember' className={s.label} >remember me</label>
					</div>
					<div className={s.button}>
						<button className={`${s.input} ${s.btn}`}>submit</button>
					</div>
					<pre>{JSON.stringify(values, 0, 2)}</pre>
				</form>
			)}
		/>
	)
}


export default Login;