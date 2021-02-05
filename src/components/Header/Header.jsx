import React from 'react'
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <ul className={s.list}>
                <li>
                  <a className={s.text}>Москва</a>
                </li>
                <li>
                    <a href="">АКЦИИ</a>
                </li>
                <li>
                    <a href="">Доставка</a>
                </li>
            </ul>
            <ul className={s.list}>
                <li className={s.user}><a>Войти</a></li>
                <li className={s.basket}><a></a></li>
            </ul>
        </header>
    )
}

export default Header;