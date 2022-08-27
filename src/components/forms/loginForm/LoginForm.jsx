import s from './LoginForm.module.css';
import React from 'react';
import { Form, Field } from 'react-final-form'
import eyeimg from './../../../assets/eye-icons/eye.png';
import eyenotimg from './../../../assets/eye-icons/eye-not.png';
import { composeValidators, required, emailValid } from './../../../utilits/validators';
import { Input } from '../../common/formControl/formControl';
import { useState } from 'react';

const LoginForm = (props) => {

	const [isPassword, setIsPassword] = useState(true);
	const showPassword = () => setIsPassword(!isPassword);
	const formData = {
		email: ``,
		password: ``,
		rememberMe: false,
		captcha: null,
	};
	return (
		<Form
			onSubmit={(values, form) => {
				props.onSubmit(values);
				props.isError && form.restart();
				setIsPassword(true);
			}}
			initialValues={{ ...formData, }}
			render={({ handleSubmit, form, submitting, pristine, errors }) => {
				const resetForm = () => {
					form.restart();
					setIsPassword(true);
				}
				const snowPasswordEvent = [`onMouseDown`, `onMouseUp`, `onTouchStart`, `onTouchEnd`].reduce(
					(result, el) => {
						result[el] = showPassword;
						return result;
					}, {});

				return (
					<form onSubmit={handleSubmit} className={s.form}>
						<div>
							<Field
								component={Input}
								validate={composeValidators(required, emailValid)}
								name='email'
								type='text'
								className={s.input}
								placeholder='Email'
							/>
						</div>
						<div className={s.password_box}>
							<Field
								component={Input}
								validate={required}
								name='password'
								type={isPassword ? `password` : `text`}
								autoComplete='off'
								className={s.input}
								placeholder='Password' />
							<div>
								<button
									{...snowPasswordEvent}
									className={s.btn_eye}
									type="button">
									<div className={s.eyebox}>
										<img src={isPassword ? eyeimg : eyenotimg} alt='eye' />
									</div>
								</button>
							</div>
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
										type='text'
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
									onClick={resetForm}
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

export default LoginForm;