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

	const btnAtrribute = [
		{
			disabled: (firstArrayElemPages === 1) || false,
			hidden: pagesNubmer < 11 || false,
			onClick: props.goStartPage,
			className: s.btn,
			text: '<start',
		},
		{
			disabled: (firstArrayElemPages < 101) || false,
			hidden: pagesNubmer < 101 || false,
			onClick: () => props.onClickBtnPrev(100),
			className: s.btn,
			text: '<<<100',
		},
		{
			disabled: (firstArrayElemPages < 11) || false,
			hidden: pagesNubmer < 21 || false,
			onClick: () => props.onClickBtnPrev(10),
			className: s.btn,
			text: '<<10',
		},
		{
			disabled: (firstArrayElemPages === 1) || false,
			hidden: pagesNubmer < 11 || false,
			onClick: () => props.onClickBtnPrev(1),
			className: s.btn,
			text: '<',
		},
		{
			disabled: (lastArrayElemPages === pagesNubmer) || false,
			hidden: pagesNubmer < 11 || false,
			onClick: () => props.onClickBtnNext(1),
			className: s.btn,
			text: '>',
		},
		{
			disabled: (lastArrayElemPages > pagesNubmer - 10) || false,
			hidden: pagesNubmer < 21 || false,
			onClick: () => props.onClickBtnNext(10),
			className: s.btn,
			text: '10>>',
		},
		{
			disabled: (lastArrayElemPages > pagesNubmer - 100) || false,
			hidden: pagesNubmer < 101 || false,
			onClick: () => props.onClickBtnNext(100),
			className: s.btn,
			text: '100>>>',
		},
		{
			disabled: (lastArrayElemPages === pagesNubmer) || false,
			hidden: pagesNubmer < 11 || false,
			onClick: props.goEndPage,
			className: s.btn,
			text: 'end>',
		},

	];
	const btnsElem = btnAtrribute.map((b, i) => {
		return (
			<li className={s.btn_box} key={i}>
				<button {...b}>{b.text}</button>
				{(i === 3) && <div className={s.total_count}> {`Total pages - ${pagesNubmer}`}</div>}

			</li>
		)
	})

	return (

		<div className={s.wrapper}>

			<ul className={s.pagination}>
				{elemPagination}
			</ul>

			<ul className={s.btns}>
				{btnsElem}
			</ul>
		</div>

	);

}


export default Padington;