import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './../../Header.module.css';

const Basket = (props) => {

    const basketPage = props.basketPage;

    return (
        <NavLink to="/basket" className={s.link}>
            <div className={s.products}>
                <div className={s.amount}>
                    {basketPage ? basketPage.amountElem : 0}
                </div>
                <div className={s.price}>
                    {basketPage ? basketPage.sum : 0} &#8381;
                </div>
            </div>
        </NavLink>
    )
}

export default Basket;