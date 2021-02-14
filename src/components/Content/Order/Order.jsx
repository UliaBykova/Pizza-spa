import React from 'react'
import s from './Order.module.css'

const Order = (props) => {

    return (
        <div className={s.container}>
            <h3 className={s.title}>Корзина</h3>
            <div className={s.blockInfo}>
                <div>
                    Картинка
                </div>
                <div>
                    <h4>Название продукта</h4>
                    <span>Размер</span>
                    <span>Ширина</span>
                </div>
            </div>
        </div>
    )
}

export default Order;