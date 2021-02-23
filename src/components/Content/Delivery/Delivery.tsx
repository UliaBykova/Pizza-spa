import React from 'react'
import MyMap from './MyMap/MyMap';
import s from './Delivery.module.css'

const Delivery = () => {
    return (
        <div className={s.container}>
            <h3 className={s.title}>Доставка</h3>
            <div className={s.info}>
                <p className={s.text}>Доставка осуществляется с 10:00 до 02:20. Оформление заказа через сайт или по телефону +7 (495) 555 55 35. Так же, возможен самовывоз по адресу г.Владикавкказ, ул. Ленина, д.28</p>
                <p className={s.text}>Все заказы доставляются нами БЕСПЛАТНО при заказе от 500 рублей. Для заказов на меньшую сумму, цена доставки составляет 200 рублей.</p>
                <p className={s.text}>В зависимости от района доставки время составляет от 30 до 60 минут. </p>
                <p className={s.text}>Благодаря использованию термосумок, наши блюда сохранят нужную температуру и свежесть в течение всей дороги до заказчика.</p>
            </div>
            <MyMap />
        </div>
    )
}

export default Delivery;


