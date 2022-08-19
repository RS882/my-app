import { Field, Form } from "react-final-form";
import { composeValidators, maxLength } from "../../../utilits/validators";
import { Textarea } from './../../common/formControl/formControl';
import { required } from './../../../utilits/validators';
import s from './TextareaForm.module.css';
import btnS from './../../../css_style_for_all/button.module.css';

const TextareaForm = (props) => {
	const formData = { [props.nameForm]: props.newTextValue, }
	const maxLengthText = maxLength(props.maxLengthText)
	return (
		<Form
			onSubmit={(values, form) => {
				props.addValue(values[props.nameForm])
				form.resetFieldState(props.nameForm)
			}}
			initialValues={{ ...formData }}
			render={({ handleSubmit, submitting, pristine, errors }) =>
				<form onSubmit={handleSubmit} >
					<Field
						component={Textarea}
						name={props.nameForm}
						validate={composeValidators(required, maxLengthText)}
						onFocus={props.delValue}
						className={s.postsarea}
					/>
					<button
						className={`${btnS.button} ${s.button_width}`}
						disabled={submitting || pristine || Object.keys(errors).length > 0}
					>{props.buttonName}</button>
				</form>

			}
		/>
	)
}

export default TextareaForm