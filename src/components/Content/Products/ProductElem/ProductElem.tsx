import React, { useState } from 'react';
import { BasketType, ElemType } from '../../../../types/types';
import SwitchersPizza from '../SwitchersPizza/SwitchersPizza';
import s from './../Products.module.css';

type PropsType = {
	basket : BasketType
	products : Array<ElemType> 
	updateBasket : (elem : any, amount : number, sumPrice : number, weightPizza : boolean) => void
}

const ProductElem: React.FC<PropsType> = (props) => {

	let weightPizza : boolean;
	const amount = props.basket.amountElem;
	const sum = props.basket.sum;
	const onAddElemToBasket = (elem : ElemType, price : number) => {
		props.updateBasket(elem, amount + 1, sum + price, weightPizza);
	};

	const [price, setPrice] = useState<number>(1);
	const [weight, setWeight] = useState<number>(0);

	const setWeightPizza = (bool : boolean) => {
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

						{elem.indicatorPizza ? (
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
