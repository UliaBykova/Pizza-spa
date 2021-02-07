import React from 'react'
import s from './Header.module.css';

const Header = () => {
    return (
        <header>
            <div className={`${s.wrapper} ${s.container}`}>
                <ul className={s.list}>
                    <li>
                        <a className={s.link}>Москва</a>
                    </li>
                    <li>
                        <a href="" className={s.link}>АКЦИИ</a>
                    </li>
                    <li>
                        <a href="" className={s.link}>Доставка</a>
                    </li>
                </ul>
                <ul className={s.list}>
                    <li className={s.user}><a className={s.link}>Войти</a></li>
                    <li className={s.basket}><a></a></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;