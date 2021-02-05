import React from 'react'
import s from './Navbar.module.css'
import logo from './../images/logo.png'


const Navbar = () => {

    console.log(logo);
    return (
        <div className={s.wrapper}>
          <div className={s.logo}>
             <img src={logo} alt="logo"></img>
          </div>
          <nav>
              <ul>
                  <li>1</li>
                  <li>2</li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
          </nav>
        </div>
    )
}

export default Navbar;