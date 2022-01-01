import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
		status: this.props.status || `no status`,
	}
	toogleEditMode = () => {
		if (this.props.isMe) {
			this.setState({
				editMode: !this.state.editMode,
				status: this.props.status || `no status`
			})
			this.props.updateUserStatus(this.state.status)
		}
	}
	// this.forceUpdate(); - такую перерисовку не рекомнедуется использовать
	selectStatus = (e) => e.target.select();// віделем содержимое input 

	onChangeStatus = (e) => this.setState({
		status: e.target.value,
	});

	render() {

		return (
			<div className={s.wrapper}>
				<h3 className={s.title}>
					{(this.props.isMe) ?
						`my status` :
						`User status`}
				</h3>
				{!this.state.editMode ?
					<div className={s.status}
						style={{ cursor: (this.props.isMe) ? `pointer` : `auto` }}
						onDoubleClick={this.toogleEditMode}>
						{this.props.status || `no status`}
					</div> :

					<div className={s.input_box}>
						<input className={s.input}
							autoFocus={true}
							onBlur={this.toogleEditMode}
							onFocus={this.selectStatus}
							onChange={this.onChangeStatus}
							value={this.state.status}
						/>
					</div>
				}
			</div>
		)
			;
	}

}
export default ProfileStatus;