import React from 'react'
import s from './../Navbar.module.css'
import inst from './../../../images/inst.png'
import vk from './../../../images/vk.png'
import telegram from './../../../images/telegram.png'

const Contacts = () => {
    return (
        <ul class={s.contacts}>
            <li><a href="/">
                <img src={vk} alt="instagram" className={s.iconContacts} />
            </a></li>
            <li><a href="/">
                <img src={inst} alt="instagram" className={s.iconContacts} />
            </a></li>
            <li><a href="/">
                <img src={telegram} alt="instagram" className={s.iconContacts} />
            </a></li>
        </ul>
    )
}

export default Contacts;