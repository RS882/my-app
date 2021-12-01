
import s from './social.module.css';



const Social = (props) => {


	return (
		<div>
			{'{ ...props.profile.contacts }'}
		</div>

	);

}


export default Social;