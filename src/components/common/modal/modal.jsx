
import s from './modal.module.css';

import React from 'react';


class Modal extends React.Component {



	arrData = (Array.isArray(this.props.content)) ? this.props.content
		: [this.props.content];
	content = () => this.arrData.map((el, i) =>
		<div className={s.content} key={i}>{el}</div>);

	onClickCloseModal = () => {
		this.props.closeModal()

	};

	render() {
		return (
			<div className={s.wrapper}>
				<div className={s.modal}>
					{this.content()}
					<div>
						<button className={s.btn} onClick={this.onClickCloseModal}>ok</button>
					</div>
				</div>

			</div>
		)

	}

}

export default Modal;