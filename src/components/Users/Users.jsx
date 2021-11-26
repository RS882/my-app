import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import avatarUser from './../../assets/img/user3.jpg'



class Users extends React.Component {
	// constructor(props) {
	// 	super(props)

	// };

	componentDidMount() {
		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(respons => {
				this.props.setUsers(respons.data.items);
				// this.props.setTotalUsersCout(respons.data.totalCount)
			})
	}

	onPageChanged = (pageNumber) => {
		this.props.setCurrentPage(pageNumber)

		axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
			.then(respons => {
				this.props.setUsers(respons.data.items);
			})
	}



	render() {

		// const pagesNubmer = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

		const elemPagination = this.props.showPageNumbers.map(pageNumber => {
			return (
				<li onClick={() => this.onPageChanged(pageNumber)}
					className={`${s.number} ${this.props.currentPage === pageNumber ? s._activ : ''}`}
					key={pageNumber}>	{pageNumber}</li>
			)
		})


		return (
			<div>
				<div className={s.padington_wrapper}>
					<button className={s.pagination_btn}> {'<start'} </button>
					<button className={s.pagination_btn}> {'<<10'} </button>
					<button className={s.pagination_btn}> {'<'} </button>
					<ul className={s.pagination}>
						{elemPagination}
					</ul>
					<button className={s.pagination_btn}> {'>'} </button>
					<button className={s.pagination_btn}> {'10>>'} </button>
					<button className={s.pagination_btn}> {'end>'} </button>
				</div>

				<div className={s.wrapper} >


					{this.props.users.map(e => {
						return (
							<div key={e.id} className={s.box}>
								<div className={s.text}>
									<div className={s.name}>{e.name}</div>
									<div className={s.status}>{e.status}</div>
									<div className={s.contry}>{'{e.location.contry}'},</div>
									<div className={s.city}>{'{e.location.city}'}</div>
								</div>
								<div className={s.avatar}
									style={{
										backgroundImage: (e.photos.small) ? `url(${e.photos.small})` : ` url(${avatarUser})`,
									}}>
								</div>

								<button className={`${s.btn} ${s.btn_follow}`} onClick={() => this.props.toogleFollow(e.id)}>
									{(e.followed) ? 'unfollow' : 'follow'}
								</button>
							</div>
						)

					})}
				</div >
			</div>
		);

	}
}

export default Users;