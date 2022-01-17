
import s from './modal.module.css';

import React from 'react';
import { connect } from 'react-redux';
import { setIsModalOpen, setCloseModal } from './../../../redux/modalReducer';


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

	render() {
		this.props.isModalClose && this.onClickCloseModal()
		return (
			<div className={s.wrapper}>
				<div onClick={``} className={s.modal} id='modalWindow'>
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
	isModalClose: state.modalWindow.isClickNotOnModal
})

export default connect(mapStateToProps, { setIsModalOpen, setCloseModal })(Modal);