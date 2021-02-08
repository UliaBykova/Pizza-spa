import React from 'react'
import Basket from './Basket/Basket';
import s from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={`${s.wrapper} ${s.container}`}>
                <ul className={s.list}>
                    <li>
                        <a className={s.link}>Бонусы</a>
                    </li>
                    <li>
                        <a href="" className={s.link}>АКЦИИ</a>
                    </li>
                    <li>
                        <a href="" className={s.link}>Доставка</a>
                    </li>
                    <li>
                        <a href="" className={s.link}>Карьера</a>
                    </li>
                    <li>
                        <a href="" className={s.link}>Отзывы</a>
                    </li>
                </ul>
                <ul className={s.list}>
                    <li className={s.user}>
                        <a className={s.link}>Войти</a>
                    </li>
                    <li className={s.basket}>
                        <Basket />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;