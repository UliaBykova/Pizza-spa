import React from 'react'
import s from './Navbar.module.css'
import logo from './../../images/logoImg.png'
import NavbarList from './NavbarList/NavbarList'
import Contacts from './Contacts/Contacts'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

    return (
        <div className={s.wrapper}>
            <div>
                <NavLink to="/">
                    <img src={logo} alt="logo" className={s.logo}></img>
                </NavLink>
            </div>
            <div className={s.number}>+7 495 555 55 35</div>
            <div className={s.workingTime}>С 10:00 до 02:00</div>
            <NavbarList />
            <Contacts />
        </div>
    )
}

export default Navbar;