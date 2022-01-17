import s from './LoginForm.module.css';
import React from 'react';
import { Form, Field } from 'react-final-form'
import eyeimg from './../../../assets/eye-icons/eye.png';
import eyenotimg from './../../../assets/eye-icons/eye-not.png';
import { composeValidators, required, emailValid } from './../../../utilits/validators';
import { Input } from '../../common/formControl/formControl';

class LoginForm extends React.Component {
	state = {
		isPassword: true,
	}

	showPassword = () => {
		this.setState({ isPassword: !this.state.isPassword, })

	}
	render() {
		console.log(`render`);

		const formData = {
			email: ``,
			password: ``,
			rememberMe: false,
			captcha: null,
		};
		return (
			<Form
				onSubmit={(values, form) => {
					this.props.onSubmit(values)
					this.props.isError && form.restart()

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
							<div className={s.password_box}>
								<Field

									component={Input}
									validate={required}
									name='password'
									type={this.state.isPassword ? `password` : `text`}
									className={s.input}
									placeholder='Password' />
								<div>
									<button onClick={this.showPassword} className={s.btn_eye} type="button">
										<div className={s.eyebox}>
											<img src={this.state.isPassword ? eyeimg : eyenotimg} alt='eye' />
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
							{this.props.capchaUrl &&
								<>
									<div className={s.capchaBox}>
										<img src={this.props.capchaUrl} alt={`capcha`} />
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


}

export default LoginForm;