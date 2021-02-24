import React, { useState } from 'react';
import { TBasket, TElem } from '../../../../types/types';
import SwitchersPizza from '../SwitchersPizza/SwitchersPizza';
import s from './../Products.module.css';

type TProps = {
	basket : TBasket
	products : Array<TElem> 
	updateBasket : ( elem : TElem,  weightPizza : boolean) => void
}

const ProductElem: React.FC<TProps> = (props) => {

	let weightPizza : boolean;
	const onAddElemToBasket = (elem : TElem) => {
		props.updateBasket(elem, weightPizza);
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
									onAddElemToBasket(elem);
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
