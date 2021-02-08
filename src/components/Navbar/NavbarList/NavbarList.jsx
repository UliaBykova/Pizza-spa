import react from "react"
import s from './../Navbar.module.css'
import imgHit from './../../../images/hit.png'
import imgPizza from './../../../images/pizza.png'
import imgJapan from './../../../images/japon.png'
import imgWok from './../../../images/wok.png'
import imgPasta from './../../../images/pasta.png'
import imgBurgers from './../../../images/burger.png'
import imgSalads from './../../../images/salat.png'
import imgPotables from './../../../images/potabl.png'
import imgDeserts from './../../../images/desert.png'
import { NavLink } from 'react-router-dom'

const NavbarList = () => {
    return (
        <nav>
            <ul className={s.list}>
                <li className={s.item}>
                    <NavLink to="/hit" activeClassName={s.activeLink}>
                        <img src={imgHit} className={s.icon}></img>
                        <span>Хит</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/pizza" activeClassName={s.activeLink}>
                        <img src={imgPizza} className={s.icon}></img>
                        <span>Пицца</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/japan" activeClassName={s.activeLink}>
                        <img src={imgJapan} className={s.icon}></img>
                        <span>Япония</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/wok" activeClassName={s.activeLink}>
                        <img src={imgWok} className={s.icon}></img>
                        <span>Wok</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/paste" activeClassName={s.activeLink}>
                        <img src={imgPasta} className={s.icon}></img>
                        <span>Паста</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/burgers" activeClassName={s.activeLink}>
                        <img src={imgBurgers} className={s.icon}></img>
                        <span>Бургеры</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/salads" activeClassName={s.activeLink}>
                        <img src={imgSalads} className={s.icon}></img>
                        <span>Салаты</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/potables" activeClassName={s.activeLink}>
                        <img src={imgPotables} className={s.icon}></img>
                        <span>Напитки</span>
                    </NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to="/deserts" activeClassName={s.activeLink}>
                        <img src={imgDeserts} className={s.icon}></img>
                        <span>Десерты</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavbarList;