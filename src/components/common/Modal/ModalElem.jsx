import React from 'react'
import s from './ModalElem.module.css'

const ModalElem = ({ active, setActive, children }) => {
    return (
        <div className={active ? `${s.modal} ${s.active}` : `${s.modal}`} onClick={() => setActive(false)}>
            <div className={s.content} onClick={e => e.stopPropagation()}>
                <button className={s.close} onClick={() => setActive(false)}></button>
                {children}
            </div>
        </div>
    )
}

export default ModalElem;