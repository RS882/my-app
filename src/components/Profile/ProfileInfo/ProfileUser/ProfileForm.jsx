import React from 'react';
import { useCallback } from 'react';
import { Form, Field } from 'react-final-form';
import { Input } from '../../../common/formControl/formControl';

const ProfileForm = ({ profile, ...props }) => {




	const formData = {
		aboutMe: profile.aboutMe || '',
		contacts: {
			facebook: profile.contacts ? profile.contacts.aboutMe : '',
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

	//console.log(props.socialIcon);


	const onSubmit = (values) => {
		console.log(values);
		props.stopProfileEditMode();

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
							<Field
								component={Input}
								name='fullName'
								type='text'
								// className={s.input}
								placeholder={'Enter Your fullname'}
							/>
							<Field
								component='input'
								name='aboutMe'
								type='text'
								// className={s.input}
								placeholder={'Enter about You'}
							/>
							<Field
								id={'lookingForAJob'}
								component='input'
								name='lookingForAJob'
								type='checkbox'

							// className={s.input}

							/>
							<label htmlFor='lookingForAJob'  >remember me</label>

							<Field
								component='input'
								name='lookingForAJobDescription'
								type='text'
								// className={s.input}
								placeholder={'Enter Your description'}
							/>
							<Field
								component='input'
								name='contacts.facebook'
								type='text'
								// className={s.input}
								placeholder={'Enter Your facebook'}
							/>
							<div >
								<button
									type="submit"
								// className={`${s.input} ${s.btn} `}
								//disabled={submitting || pristine || Object.keys(errors).length > 0}
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