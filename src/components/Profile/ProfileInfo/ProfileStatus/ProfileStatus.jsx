import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status || `______`,
	}
	toogleEditMode = () => {
		this.setState({
			editMode: !this.state.editMode,
		})
		this.props.updateUserStatus(this.state.status)
	}
	// this.forceUpdate(); - такую перерисовку не рекомнедуется использовать
	selectStatus = (e) => e.target.select();// віделем содержимое input 

	onChangeStatus = (e) => this.setState({
		status: e.target.value,
	})

	render() {
		// console.log(this.props);
		// debugger
		return (
			<div className={s.wrapper}>
				<h3 className={s.title}>my status</h3>
				{!this.state.editMode ?
					<div className={s.status} onDoubleClick={this.toogleEditMode}>
						{this.props.status}
					</div> :
					<div className={s.input_box}>
						<input className={s.input}
							autoFocus={true}
							onBlur={this.toogleEditMode}
							onFocus={this.selectStatus}
							onChange={this.onChangeStatus}
							value={this.state.status}
						// value={this.props.status}
						/>
					</div>}
			</div>
		)
			;
	}

}
export default ProfileStatus;