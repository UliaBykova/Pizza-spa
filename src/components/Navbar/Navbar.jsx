import React from 'react'
import s from './Navbar.module.css'
import logo from './../../images/logoImg.png'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    return (  
        <div className={s.wrapper}>
            <div>
                <a href="/">
                    <img src={logo} alt="logo" className={s.logo}></img>
                </a>
            </div>
            <div className={s.number}>+7 495 555 55 35</div>
            <div className={s.workingTime}>С 10:00 до 02:00</div>
            <nav>
                <ul>
                    <li className={s.item}>
                        <NavLink to="/hit" activeClassName={s.activeLink}>Хит</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/pizza" activeClassName={s.activeLink}>Пицца</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/japan" activeClassName={s.activeLink}>Япония</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/wok" activeClassName={s.activeLink}>Wok</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/paste" activeClassName={s.activeLink}>Паста</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/burgers" activeClassName={s.activeLink}>Бургеры</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/salads" activeClassName={s.activeLink}>Салаты</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/potables" activeClassName={s.activeLink}>Напитки</NavLink>
                    </li>
                    <li className={s.item}>
                        <NavLink to="/desserts" activeClassName={s.activeLink}>Десерты</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;