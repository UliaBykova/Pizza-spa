import s from './SwitchersPizza.module.css';

const SwitchersPizza = (props) => {
	const onSetPrice = (smallPizza) => {
		if (smallPizza) {
			props.setPrice((props.elem.price = props.elem.priceSizeSmall));
			props.setWeight((props.elem.weight = props.elem.weightSmall));
		} else {
			props.setPrice((props.elem.price = props.elem.priceSizeMiddle));
			props.setWeight((props.elem.weight = props.elem.weightMiddle));
		}
	};

	return (
		<div className={s.switchers}>
			<div className={s.switcherSize}>
				<button
					className={s.productBtn}
					onClick={() => {
						onSetPrice(true);
					}}
				>
					23 см
				</button>
				<button
					className={s.productBtn}
					onClick={() => {
						onSetPrice(false);
					}}
				>
					30 см
				</button>
			</div>
			<div className={s.switcherThickness}>
				<button className={s.productBtn}>Тонкое</button>
				<button className={s.productBtn}>Традиционное</button>
			</div>
		</div>
	);
};

export default SwitchersPizza;

