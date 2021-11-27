import React from 'react';
import s from './Users.module.css';
import avatarUser from './../../assets/img/user3.jpg'


const Users = (props) => {

	const pagesNubmer = Math.ceil(props.totalUsersCount / props.pageSize);

	const elemPagination = props.showPageNumbers.map(pageNumber => {
		return (
			<li onClick={() => props.onPageChanged(pageNumber)}
				className={`${s.number} ${props.currentPage === pageNumber ? s._activ : ''}`}
				key={pageNumber}>	{pageNumber}</li>
		)
	})
	const onClickBtnNext = (step) => {
		props.onPageChanged(props.currentPage + step);
		props.changePadingtonNext(step)
	}

	const onClickBtnPrev = (step) => {
		props.onPageChanged(props.currentPage - step);
		props.changePadingtonPrev(step)
	}

	const goStartPage = () => {
		props.onPageChanged(1);
		props.goStartPage();
	}

	const goEndPage = () => {
		props.onPageChanged(pagesNubmer);
		props.goEndPage();
	}

	return (
		<div>
			<div className={s.padington_wrapper}>
				<button onClick={goStartPage} className={s.pagination_btn}> {'<start'} </button>
				<button onClick={() => onClickBtnPrev(100)} className={s.pagination_btn}> {'<<<100'} </button>
				<button onClick={() => onClickBtnPrev(10)} className={s.pagination_btn}> {'<<10'} </button>
				<button onClick={() => onClickBtnPrev(1)} className={s.pagination_btn}> {'<'} </button>
				<ul className={s.pagination}>
					{elemPagination}
				</ul>
				<button onClick={() => onClickBtnNext(1)} className={s.pagination_btn}> {'>'} </button>
				<button onClick={() => onClickBtnNext(10)} className={s.pagination_btn}> {'10>>'} </button>
				<button onClick={() => onClickBtnNext(100)} className={s.pagination_btn}> {'100>>>'} </button>
				<button onClick={goEndPage} className={s.pagination_btn}> {'end>'} </button>
				<div> {`Total pages - ${pagesNubmer}`}</div>
			</div>

			<div className={s.wrapper} >


				{props.users.map(e => {
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

							<button className={`${s.btn} ${s.btn_follow}`} onClick={() => props.toogleFollow(e.id)}>
								{(e.followed) ? 'unfollow' : 'follow'}
							</button>
						</div>
					)

				})}
			</div >
		</div>
	);

}


export default Users;