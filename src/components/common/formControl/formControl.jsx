import s from './formControl.module.css';

const FormControl = ({ input, meta, FormType, ...props }) => {
	if (props.onFocus) input.onFocus = props.onFocus;
	if (props.onBlur) input.onBlur = props.onBlur;
	if (props.onChange) input.onChange = props.onChange;
	const hasError = meta.error && meta.touched;


	return (
		<div className={s.formBox}>
			<div >
				<FormType {...props} {...input} style={{ border: hasError && '2px solid red', resize: 'none', }} />
			</div>
			<div className={s.error}>
				{hasError && <span>{meta.error}</span>}
			</div>
		</div>
	)
}

export const Textarea = (props) => <FormControl {...props} FormType="textarea" />

export const Input = (props) => <FormControl {...props} FormType="input" />
