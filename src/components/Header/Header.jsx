import React from 'react'
import { NavLink } from 'react-router-dom';
import BasketContainer from './BasketContainer/BasketContainer';
import s from './Header.module.css';

const Header = (props) => {

    const setModal = () => {props.setModalActive(true)}

    return (
        <header>
            <div className={`${s.wrapper} ${s.container}`}>
                <ul className={s.list}>
                    <li>
                        <NavLink to="/bonuses" className={s.link}>Бонусы</NavLink>
                    </li>
                    <li>
                        <NavLink to="/promo" className={s.link}>АКЦИИ</NavLink>
                    </li>
                    <li>
                        <NavLink to="/delivery" className={s.link}>Доставка</NavLink>
                    </li>
                    <li>
                        <NavLink to="/career" className={s.link}>Карьера</NavLink>
                    </li>
                </ul>
                <ul className={s.list}>
                    <li className={s.user}>
                        <button className={s.enterBtn} onClick={setModal}>Войти</button>
                    </li>
                    <li className={s.basket}>
                        <BasketContainer />
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header;