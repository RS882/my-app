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

	const styleHidden = condition => ({ visibility: condition && 'hidden' })

	return (

		<div className={s.wrapper}>

			<ul className={s.pagination}>
				{elemPagination}
			</ul>
			<div className={s.btns}>
				<button
					style={styleHidden(firstArrayElemPages === 1)}
					onClick={props.goStartPage}
					className={s.btn}>
					{'<start'} </button>
				<button
					style={styleHidden(firstArrayElemPages < 101)}
					onClick={() => props.onClickBtnPrev(100)}
					className={s.btn}>
					{'<<<100'} </button>
				<button
					style={styleHidden(firstArrayElemPages < 11)}
					onClick={() => props.onClickBtnPrev(10)}
					className={s.btn}>
					{'<<10'} </button>
				<button
					style={styleHidden(firstArrayElemPages === 1)}
					onClick={() => props.onClickBtnPrev(1)}
					className={s.btn}>
					{'<'} </button>

				<div className={s.total_count}> {`Total pages - ${pagesNubmer}`}</div>

				<button
					style={styleHidden(lastArrayElemPages === pagesNubmer)}
					onClick={() => props.onClickBtnNext(1)}
					className={s.btn}>
					{'>'} </button>
				<button
					style={styleHidden(lastArrayElemPages > pagesNubmer - 10)}
					onClick={() => props.onClickBtnNext(10)}
					className={s.btn}>
					{'10>>'} </button>
				<button
					style={styleHidden(lastArrayElemPages > pagesNubmer - 100)}

					onClick={() => props.onClickBtnNext(100)}
					className={s.btn}>
					{'100>>>'} </button>
				<button
					style={styleHidden(lastArrayElemPages === pagesNubmer)}
					onClick={props.goEndPage}
					className={s.btn}>
					{'end>'} </button>

			</div>
		</div>

	);

}


export default Padington;