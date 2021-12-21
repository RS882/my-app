import React from 'react';
import s from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
	state = {
		editMode: false,
	}
	toogleEditMode = () => this.setState({
		editMode: !this.state.editMode,
	})
	// this.forceUpdate(); - такую перерисовку не рекомнедуется использовать
	selectStatus = (e) => e.target.select();// віделем содержимое input 

	render() {
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
							defaultValue={this.props.status}
						// value={this.props.status}
						/>
					</div>}
			</div>
		)
			;
	}

}
export default ProfileStatus;