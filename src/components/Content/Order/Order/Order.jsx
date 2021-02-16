import React from 'react';
import s from './Order.module.css';
import OrderItem from './OrderItem/OrderItem';

const Order = (props) => {

	return (
		<div className={s.container}>
			<h3 className={s.title}>Корзина</h3>
			{props.basket.selectedElem.map((elem) => (
				<OrderItem elem={elem}  />
			))}
			<div className={s.deliveryInfo}>
				<div className={s.deliveryResult}>Доставка : бесплатно</div>
				<div className={s.registration}>
					<div>Итого к оплате : <span className={s.sum}>{props.basket.sum} &#8381;</span></div>
                    <button className={s.orderBtn}>Заказать</button>
				</div>
			</div>
		</div>
	);
};

export default Order;
