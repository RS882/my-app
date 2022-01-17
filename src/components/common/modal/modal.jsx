
import s from './modal.module.css';

import React from 'react';
import { connect } from 'react-redux';
import { setIsModalOpen, setCloseModal, setIsClickModal } from './../../../redux/modalReducer';


class Modal extends React.Component {

	componentDidMount() {
		this.props.setIsModalOpen();
	}

	componentWillUnmount() {
		this.props.setCloseModal()
	}

	arrData = (Array.isArray(this.props.content)) ? this.props.content
		: [this.props.content];
	content = this.arrData.map((el, i) =>
		<div className={s.content} key={i}>{el}</div>);

	onClickCloseModal = () => this.props.closeModal();
	onModalClick = () => this.props.setIsClickModal()

	render() {
		this.props.isModalClose && this.onClickCloseModal()
		return (
			<div className={s.wrapper}>
				<div onClick={this.onModalClick} className={s.modal} >
					{this.content}
					<div>
						<button className={s.btn} onClick={this.onClickCloseModal}>ok</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	isModalClose: state.modalWindow.isCloseModal
})

export default connect(mapStateToProps, { setIsModalOpen, setCloseModal, setIsClickModal, })(Modal);