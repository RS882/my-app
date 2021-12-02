
import s from './social.module.css';



const Social = (props) => {

	const socialItem = props.social.map((el, i) => {
		return (
			<li className={s.link_box} key={i}>
				<a href={el.url} title={el.name} className={s.link}  >
					<img className={s.img} src={el.img} alt={'social'} />
				</a>
			</li>
		)
	})

	return (
		<ul className={s.wrapper}
			style={{ flexDirection: props.vertical ? 'column' : 'row' }}>
			{socialItem}
		</ul >

	);

}


export default Social;