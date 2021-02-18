import React from 'react';
import s from './../Order.module.css';

const OrderItem = (props) => {
	const onDeleteProductToBasket = (id) => {
		props.deleteProductToBasket(id);
	};

	return (
		<div className={s.blockInfo}>
			<div className={s.descriptionBlock}>
				<img src={props.elem.image} alt="product" className={s.photo} />
				<div>
					<h4 className={s.name}>{props.elem.name}</h4>
					<div className={s.composition}>{props.elem.composition}</div>
				</div>
			</div>
			<div className={s.detailsBlock}>
				<div className={s.quantity}>
					<button className={s.amountBtn}>-</button>
					<div className={s.amount}>1</div>
					<button className={s.amountBtn}>+</button>
				</div>
				<div className={s.price}> {props.elem.price} &#8381;</div>
				<button
					className={s.close}
					onClick={() => {
						onDeleteProductToBasket(props.elem.id);
					}}
				/>
			</div>
		</div>
	);
};

export default OrderItem;