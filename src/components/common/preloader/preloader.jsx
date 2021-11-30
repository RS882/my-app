import preloader from './../../../assets/spiner/spinner.svg';
import s from './preloader.module.css';

const Preloader = () => {
	return (

		<div className={s.wrapper}>
			<div className={s.img_box}>
				<img className={s.img} src={preloader} alt='preloader' />
			</div>
		</div>

	)

}

export default Preloader;