import React from 'react';
import { TBasket, TElem } from '../../../../types/types';
import s from './Order.module.css';
import OrderItem from './OrderItem/OrderItem';

type TProps = {
	basket : TBasket
	deleteProductToBasket : (elem : TElem) => void
	deleteProductAll : (elem : TElem) => void
	incProduct : (elem : TElem) => void
	decProduct : (elem : TElem) => void
}

const Order: React.FC<TProps> = (props) => {
	return (
		<div className={s.container}>
			<h3 className={s.title}>Корзина</h3>
			{props.basket.selectedElem.map((elem) => (
				<OrderItem
					key={elem.id}
					elem={elem}
					deleteProductToBasket={props.deleteProductToBasket}
					deleteProductAll = {props.deleteProductAll}
					incProduct={props.incProduct}
					decProduct={props.decProduct}
				/>
			))}
			<div className={s.deliveryInfo}>
				<div className={s.deliveryResult}>Доставка : бесплатно</div>
				<div className={s.registration}>
					<div>
						Итого к оплате : <span className={s.sum}>{props.basket.sum} &#8381;</span>
					</div>
					<button className={s.orderBtn}>Заказать</button>
				</div>
			</div>
		</div>
	);
};

export default Order;
