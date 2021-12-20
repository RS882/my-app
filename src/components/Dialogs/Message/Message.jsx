
import s from './Message.module.css';


const Message = (props) => {
	const marginL = (/me/i).test(props.author) ? 30 : 0;


	return (
		<li style={{ marginLeft: marginL + '%' }} className={s.message} >
			<div className={s.name}>{props.author.toLowerCase()}</div>
			<div>{props.message}</div>
		</li >
	)
}


export default Message;