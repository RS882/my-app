
import s from './Message.module.css';


const Message = (props) => {
	let marginL = ['me', 'Me', 'ME'].includes(props.author) ? 30 : 0;

	return (
		<li style={{ marginLeft: marginL + '%' }} className={s.message} >
			<div className={s.name}>{props.author}</div>
			<div>{props.message}</div>
		</li >
	)
}


export default Message;