import react from 'react';
import s from './SwitchersPizza.module.css';

const SwitchersPizza = (props) => {

	const onChoosePizza = (elem, smallPizza) => {
	/* 	props.setSizePizza(id, smallPizza); */
	smallPizza ? elem.finalPrice = elem.priceSizeSmall : elem.finalPrice = elem.priceSizeMiddle;
	console.log(elem.finalPrice);

	};

	return (
		<div className={s.switchers}>
			<div className={s.switcherSize}>
				<button
					className={s.productBtn}
					onClick={() => {
						onChoosePizza(props.elem, true);
					}}
				>
					23 см
				</button>
				<button
					className={s.productBtn}
					onClick={() => {
						onChoosePizza(props.elem, false);
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

/* window.store.getState().productPage.products.data.pizza */
