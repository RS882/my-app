import React from 'react';
import { useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import cn from 'classnames';
import s from './ProfileForm.module.css';
import btnS from './../../../../css_style_for_all/button.module.css';
import { delErrorsMessageProfileFrom, updateUserInfo } from './../../../../redux/profileReducer';
import { useDispatch, useSelector } from 'react-redux';
import { required } from '../../../../utilits/validators';
import { Input, Textarea } from '../../../common/formControl/formControl';
import Modal from './../../../common/modal/modal';

const ProfileForm = ({ profile, stopProfileEditMode, socialIcon, ...props }) => {

	const formData = {
		aboutMe: profile.aboutMe || null,
		contacts: {
			facebook: profile.contacts ? profile.contacts.facebook : null,
			github: profile.contacts ? profile.contacts.github : null,
			instagram: profile.contacts ? profile.contacts.instagram : null,
			mainLink: profile.contacts ? profile.contacts.mainLink : null,
			twitter: profile.contacts ? profile.contacts.twitter : null,
			vk: profile.contacts ? profile.contacts.vk : null,
			website: profile.contacts ? profile.contacts.website : null,
			youtube: profile.contacts ? profile.contacts.youtube : null,
		},
		fullName: profile.fullName,
		lookingForAJob: profile.lookingForAJob,
		lookingForAJobDescription: profile.lookingForAJobDescription || null,
	};



	const fields = ['fullName', 'aboutMe', 'lookingForAJob', 'lookingForAJobDescription'];
	const placeholderObj = {
		'fullName': 'Enter your fullname',
		'aboutMe': 'Enter about you',
		'lookingForAJobDescription': 'Enter about your job',
	};
	const labelTextObj = {
		'fullName': 'Your fullname',
		'aboutMe': 'About you',
		'lookingForAJobDescription': 'About your job ',
		'lookingForAJob': 'Looking you a job?',
	};

	const fieldsElem = fields.map((e, i) =>
		<div key={e + i} className={s.field__wrapper}>
			<label htmlFor={e} className={s.label}>{labelTextObj[e]}</label>
			<Field
				id={e}
				validate={e !== 'lookingForAJob' && required}
				component={e === 'lookingForAJob' ? 'input' : e === 'fullName' ? Input : Textarea}
				name={e}
				type={e === 'lookingForAJob' ? 'checkbox' : 'text'}
				placeholder={e !== 'lookingForAJob' ? placeholderObj[e] : ''}
				className={e === 'lookingForAJob' ? s.checkbox : e === 'fullName' ? s.text__field : s.text__textarea}
			/>

		</div>
	);

	const contantFildsElem = profile.contacts && Object.keys(profile.contacts).map((e, i) =>
		<div key={e + i} className={s.social}>
			<img src={socialIcon[e]} alt={e} width='30' height='30' className={s.social__img} />
			<Field
				name={`contacts.${e}`}
				component='input'
				type='text'
				placeholder={`Enter Your ${e} address`}
				className={s.text__field}
			/>

		</div>

	);


	const dispatch = useDispatch();
	const errorMessages = useSelector(state => state.profilePage.errorMessage);
	const delErrorMesage = () => { dispatch(delErrorsMessageProfileFrom()) };


	const onSubmit = (values) => {
		values.userId = profile.userId
		dispatch(updateUserInfo(values))
	};

	const MyForm = useCallback(() => {
		return (
			<Form
				onSubmit={onSubmit}
				initialValues={{ ...formData }}
				render={({ handleSubmit, form, submitting, pristine, errors, values }) => {
					return (
						<form onSubmit={handleSubmit}>
							{fieldsElem}
							<div className={s.label}>Contacts:</div>
							<div className={s.social__box}>
								{contantFildsElem}
							</div>

							<div >
								<button
									type="submit"
									className={cn(btnS.button, s.button_width)}
									disabled={submitting || pristine || Object.keys(errors).length > 0}
								>submit</button>

							</div>
						</form>
					)
				}}
			/>
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])


	return (
		<>
			< MyForm />
			<button
				onClick={stopProfileEditMode}
				className={`${btnS.button} ${s.button_width}`}>cancel</button>
			{errorMessages.length !== 0 ? < Modal closeModal={delErrorMesage} content={errorMessages} /> : null}
		</>
	)


};

export default ProfileForm;