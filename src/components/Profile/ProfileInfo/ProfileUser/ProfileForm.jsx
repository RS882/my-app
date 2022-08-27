import React from 'react';
import { useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from '../../../common/formControl/formControl';
import s from './ProfileForm.module.css';
import btnS from './../../../../css_style_for_all/button.module.css';

const ProfileForm = ({ profile, stopProfileEditMode, socialIcon, ...props }) => {




	const formData = {
		aboutMe: profile.aboutMe || '',
		contacts: {
			facebook: profile.contacts ? profile.contacts.facebook : '',
			github: profile.contacts ? profile.contacts.github : '',
			instagram: profile.contacts ? profile.contacts.instagram : '',
			mainLink: profile.contacts ? profile.contacts.mainLink : '',
			twitter: profile.contacts ? profile.contacts.twitter : '',
			vk: profile.contacts ? profile.contacts.vk : '',
			website: profile.contacts ? profile.contacts.website : '',
			youtube: profile.contacts ? profile.contacts.youtube : '',
		},
		fullName: profile.fullName,
		lookingForAJob: profile.lookingForAJob,
		lookingForAJobDescription: profile.lookingForAJobDescription || '',
	};



	const fields = ['fullName', 'aboutMe', 'lookingForAJob', 'lookingForAJobDescription'];
	const placeholderObj = {
		'fullName': 'Enter Your fullname',
		'aboutMe': 'Enter about You',
		'lookingForAJobDescription': 'Enter Your description',
	};

	const fieldsElem = fields.map((e, i) =>
		<div key={e + i}>
			<Field
				id={e}
				component={Input}
				name={e}
				type={e === 'lookingForAJob' ? 'checkbox' : 'text'}
				placeholder={e !== 'lookingForAJob' ? placeholderObj[e] : ''}
			/>
			{e === 'lookingForAJob' ? <label htmlFor='lookingForAJob'  >Looking You a job?</label> : null}
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
				className={s.social__field}
			/>

		</div>

	);




	const onSubmit = (values) => {
		console.log(values);
		stopProfileEditMode();

	}


	const MyForm = useCallback(() => {
		return (
			<Form
				onSubmit={onSubmit}
				initialValues={{ ...formData }}
				render={({ handleSubmit, form, submitting, pristine, errors, values }) => {
					//console.log(values.fullName);

					return (
						<form onSubmit={handleSubmit}>
							{fieldsElem}
							<div className={s.social__box}>
								{contantFildsElem}
							</div>


							<div >
								<button
									type="submit"
									className={`${btnS.button} ${s.button_width}`}
									disabled={submitting || pristine || Object.keys(errors).length > 0}
								>submit</button>
							</div>
						</form>
					)



				}}
			/>


		);
	}, [])


	return (
		< MyForm />
	)
};

export default ProfileForm;