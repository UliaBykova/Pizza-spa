import React from 'react'
import { TPromo } from '../../../types/types';
import s from './Promo.module.css'

type TProps = {
    promo : Array<TPromo>
}

const Promo:React.FC<TProps> = (props) => {

    return (
        <div className={s.container}>
            <h3 className={s.title}>Акции</h3>
            {
                props.promo.map((elem) =>
                    <div key={elem.id} className={s.promo}>
                        <a href="/">
                            <img src={elem.image} alt="sales"></img>
                        </a>
                    </div>
                )
            }
        </div>
    )
}

export default Promo;


