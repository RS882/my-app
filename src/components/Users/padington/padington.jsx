import React from 'react';
import s from './padington.module.css';



const Padington = (props) => {

	const pagesNubmer = Math.ceil(props.totalUsersCount / props.pageSize);
	const firstArrayElemPages = props.showPageNumbers[0];
	const lastArrayElemPages = props.showPageNumbers[props.showPageNumbers.length - 1];

	const elemPagination = props.showPageNumbers.map(pageNumber => (
		<li onClick={() => props.onPageChanged(pageNumber)}
			className={`${s.number} ${props.currentPage === pageNumber ? s._activ : ''}`}
			key={pageNumber}>	{pageNumber}</li>
	));

	const styleHidden = condition => ({ display: condition && 'none' })

	return (

		<div className={s.padington_wrapper}>
			<button
				style={styleHidden(firstArrayElemPages === 1)}
				onClick={props.goStartPage}
				className={s.pagination_btn}>
				{'<start'} </button>
			<button
				style={styleHidden(firstArrayElemPages < 101)}
				onClick={() => props.onClickBtnPrev(100)}
				className={s.pagination_btn}>
				{'<<<100'} </button>
			<button
				style={styleHidden(firstArrayElemPages < 11)}
				onClick={() => props.onClickBtnPrev(10)}
				className={s.pagination_btn}>
				{'<<10'} </button>
			<button
				style={styleHidden(firstArrayElemPages === 1)}
				onClick={() => props.onClickBtnPrev(1)}
				className={s.pagination_btn}>
				{'<'} </button>

			<ul className={s.pagination}>
				{elemPagination}
			</ul>

			<button
				style={styleHidden(lastArrayElemPages === pagesNubmer)}
				onClick={() => props.onClickBtnNext(1)}
				className={s.pagination_btn}>
				{'>'} </button>
			<button
				style={styleHidden(lastArrayElemPages > pagesNubmer - 10)}
				onClick={() => props.onClickBtnNext(10)}
				className={s.pagination_btn}>
				{'10>>'} </button>
			<button
				style={styleHidden(lastArrayElemPages > pagesNubmer - 100)}

				onClick={() => props.onClickBtnNext(100)}
				className={s.pagination_btn}>
				{'100>>>'} </button>
			<button
				style={styleHidden(lastArrayElemPages === pagesNubmer)}
				onClick={props.goEndPage}
				className={s.pagination_btn}>
				{'end>'} </button>
			<div> {`Total pages - ${pagesNubmer}`}</div>
		</div>


	);

}


export default Padington;