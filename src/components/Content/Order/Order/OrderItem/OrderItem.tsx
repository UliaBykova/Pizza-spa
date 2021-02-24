import React from 'react';
import { TElem } from '../../../../../types/types';
import s from './../Order.module.css';

type TProps = {
	elem: TElem;
	deleteProductToBasket: (elem: TElem) => void;
	deleteProductAll : (elem : TElem) => void;
	incProduct: (elem: TElem) => void;
	decProduct: (elem: TElem) => void;
};

const OrderItem: React.FC<TProps> = (props) => {
	const elem = props.elem;
	const onDeleteProductToBasket = (elem: TElem) => {
		props.deleteProductToBasket(elem);
	};
	const onDeleteProductAll = (elem : TElem) => {
		props.deleteProductAll(elem);
	}
	const onIncProduct = (elem: TElem) => {
		props.incProduct(elem);
	};
	const onDecProduct = (elem: TElem) => {
		props.decProduct(elem);
	};

	return (
		<div className={s.blockInfo}>
			<div className={s.descriptionBlock}>
				<img src={elem.image} alt="product" className={s.photo} />
				<div className={s.contentInfo}>
					<h4 className={s.name}>{elem.name}</h4>
					<div className={s.composition}>{elem.composition}</div>
					{elem.priceSizeSmall ? (
						<div className={s.pizzaInfo}>
							{elem.price === elem.priceSizeSmall ? (
								<div>23 см</div>
							) : (
								<div>30 см</div>
							)}
							<div>{elem.weightPizza}</div>
						</div>
					) : null}
				</div>
			</div>
			<div className={s.detailsBlock}>
				<div className={s.quantity}>
					<button
						className={s.amountBtn}
						onClick={() => {
							elem.countProduct === 1
								? onDeleteProductToBasket(elem)
								: onDecProduct(elem);
						}}
					>
						-
					</button>
					<div className={s.amount}>{elem.countProduct ? elem.countProduct : 1}</div>
					<button className={s.amountBtn} onClick={() => onIncProduct(elem)}>
						+
					</button>
				</div>
				<div className={s.price}> {elem.price} &#8381;</div>
				<button
					className={s.close}
					onClick={() => {
						onDeleteProductAll(elem);
					}}
				/>
			</div>
		</div>
	);
};

export default OrderItem;
