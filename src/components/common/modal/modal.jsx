
import s from './modal.module.css';


const Modal = (props) => {

	const arrData = (Array.isArray(props.content)) ? props.content
		: [props.content];
	const content = () => arrData.map((el, i) =>
		<div className={s.content} key={i}>{el}</div>);

	const onClickCloseModal = () => props.closeModal();

	return (
		<div className={s.wrapper}>
			<div className={s.modal}>
				{content()}
				<div>
					<button className={s.btn} onClick={onClickCloseModal}>ok</button>
				</div>
			</div>

		</div>
	)

}

export default Modal;