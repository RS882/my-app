
import s from './modal.module.css';

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setIsModalOpen, setCloseModal, setIsClickModal } from './../../../redux/modalReducer';


const Modal = (props) => {

	useEffect(() => {
		props.setIsModalOpen();
		return () => props.setCloseModal();
	})

	const arrData = (Array.isArray(props.content)) ? props.content
		: [props.content];
	const content = arrData.map((el, i) =>
		<div className={s.content} key={i}>{el}</div>);

	const onClickCloseModal = () => props.closeModal();
	const onModalClick = () => props.setIsClickModal()

	props.isModalClose && onClickCloseModal()

	return (
		<div className={s.wrapper}>
			<div onClick={onModalClick} className={s.modal} >
				{content}
				<div>
					<button className={s.btn} onClick={onClickCloseModal}>ok</button>
				</div>
			</div>
		</div>
	)

}

const mapStateToProps = (state) => ({
	isModalClose: state.modalWindow.isCloseModal
})

export default connect(mapStateToProps, { setIsModalOpen, setCloseModal, setIsClickModal, })(Modal);