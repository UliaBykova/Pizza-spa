import React, { useState } from 'react';
import s from './SwitchersPizza.module.css';


const SwitchersPizza = (props) => {

	const [activeSize, setActiveSize] = useState(true);
	const [activeWeight, setActiveWeight] = useState(true);

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
					className={activeSize ? `${s.productBtn} ${s.active}` : `${s.productBtn}`}
					onClick={() => {
						onSetPrice(true);
						setActiveSize(true);
					}}
				>
					23 см
				</button>
				<button
					className={activeSize ? `${s.productBtn}` : `${s.productBtn} ${s.active}`}
					onClick={() => {
						onSetPrice(false);
						setActiveSize(false);
					}}
				>
					30 см
				</button>
			</div>
			<div className={s.switcherThickness}>
				<button
					className={
						activeWeight ? `${s.productBtn} ${s.active}` : `${s.productBtn}`
					}
					onClick={() => {
						setActiveWeight(true);
						props.setWeightPizza(activeWeight);
					}}
				>
					Тонкое
				</button>
				<button
					className={
						activeWeight ? `${s.productBtn}` : `${s.productBtn} ${s.active}`
					}
					onClick={() => {
						setActiveWeight(false);
						props.setWeightPizza(activeWeight);
					}}
				>
					Традиционное
				</button>
			</div>
		</div>
	);
};

export default SwitchersPizza;
