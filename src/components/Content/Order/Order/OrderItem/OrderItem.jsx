import React from 'react';
import s from './../Order.module.css';

const OrderItem = (props) => {

	const elem = props.elem;
	const onDeleteProductToBasket = (id) => {
		props.deleteProductToBasket(id);
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
							{elem.price === elem.priceSizeSmall ? <div>23 см</div> : <div>30 см</div> }
							<div>{elem.weightPizza}</div>
						</div>
					) : null}
				</div>
			</div>
			<div className={s.detailsBlock}>
				<div className={s.quantity}>
					<button className={s.amountBtn}>-</button>
					<div className={s.amount}>1</div>
					<button className={s.amountBtn}>+</button>
				</div>
				<div className={s.price}> {elem.price} &#8381;</div>
				<button
					className={s.close}
					onClick={() => {
						onDeleteProductToBasket(elem.id);
					}}
				/>
			</div>
		</div>
	);
};

export default OrderItem;
