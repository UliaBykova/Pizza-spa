import React from 'react'
import s from './../Header.module.css';

const Basket = () => {
    return (
        <a className={s.link}>
            <div className={s.products}>
                <div className={s.amount}>
                    0
                </div>
                <div className={s.price}>
                    0 &#8381;
                </div>
            </div>
        </a>
    )
}

export default Basket;