export const required = (value) => (value ? undefined : `This field is required`)

export const maxLength = (maxLength) => (value) =>
	(value && value.length <= maxLength) ? undefined :
		`Max length is not more than ${maxLength}`;

export const mustBeNumber = (value) => (isNaN(value) ?
	`Must be a number` : undefined);


export const minValue = (min) => (value) =>
	isNaN(value) || value >= min ? undefined :
		`Should be greater than ${min}`;

export const emailValid = (value) =>
	(/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/).test(value) ?
		undefined : `Please enter a valid e-mail`;



export const composeValidators = (...validators) => (value) =>
	validators.reduce((error, validator) => error || validator(value), undefined);