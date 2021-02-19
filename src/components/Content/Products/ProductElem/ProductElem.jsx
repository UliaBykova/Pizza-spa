import React, { useState } from 'react';
import SwitchersPizza from '../SwitchersPizza/SwitchersPizza';
import s from './../Products.module.css';

const ProductElem = (props) => {
	
	let weightPizza;
	const amount = props.basket.amountElem;
	const sum = props.basket.sum;
	const onAddElemToBasket = (elem, price) => {
		props.updateBasket(elem, amount + 1, sum + price, weightPizza);
	};

	const [price, setPrice] = useState(0);
	const [weight, setWeight] = useState(0);

	const setWeightPizza = (bool) => {
		weightPizza = bool;
	}


	return (
		<>
			{props.products.map((elem) => (
				<div key={elem.id} className={s.productBlock}>
					<img src={elem.image} alt="product" className={s.photo} />
					<div className={s.productContent}>
						<div>
							<div className={s.productInfo}>
								<h3 className={s.productName}>{elem.name}</h3>
								<span className={s.weight}>{elem.weight}г</span>
							</div>
							<div className={s.description}>{elem.composition}</div>
						</div>

						{props.indicatorPizza ? (
							<SwitchersPizza
								elem={elem}
								price={price}
								setPrice={setPrice}
								weight={weight}
								setWeight={setWeight}
								setWeightPizza={setWeightPizza}
							/>
						) : null}

						<div className={s.registration}>
							<span className={s.price}>{elem.price} &#8381;</span>
							<button
								className={s.btnAdd}
								onClick={() => {
									onAddElemToBasket(elem, elem.price);
								}}
							>
								В корзину
							</button>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default ProductElem;
