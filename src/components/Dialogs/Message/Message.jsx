
import s from './Message.module.css';


const Message = (props) => {
	const marginL = (/me/i).test(props.author) ? 30 : 0;


	return (
		<div style={{ marginLeft: marginL + '%' }} className={s.message} >
			<div className={s.name}>
				{marginL === 30 ? props.author.toLowerCase() : props.author}
			</div>
			<div>{props.message}</div>
		</div >
	)
}


export default Message;