
import s from './modal.module.css';

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsModalOpen, setCloseModal, setIsClickModal } from './../../../redux/modalReducer';


const Modal = ({ content, closeModal, ...props }) => {

	const isModalClose = useSelector(state => state.modalWindow.isCloseModal);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setIsModalOpen());
		return () => dispatch(setCloseModal());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const arrData = (Array.isArray(content)) ? content
		: [content];
	const message = arrData.map((el, i) => <div className={s.content} key={i}>{el}</div>);

	const onClickCloseModal = () => closeModal();
	const onModalClick = () => dispatch(setIsClickModal())

	isModalClose && onClickCloseModal()

	return (
		<div className={s.wrapper}>
			<div onClick={onModalClick} className={s.modal} >
				{message}
				<div>
					<button className={s.btn} onClick={onClickCloseModal}>ok</button>
				</div>
			</div>
		</div>
	)

}

export default React.memo(Modal);