import React from 'react'
import s from './../Products.module.css'
import pizza from "./../../../images/Bosco.jpg"

const ProductElem = (props) => {
    return (
        <div className={s.productContainer}>
            <div className={s.productBlock}>
                <img src={pizza} alt="pizza" className={s.photo} />
                <div className={s.productContent}>
                    <div>
                        <div className={s.productInfo}>
                            <h3 className={s.productName}>Боско</h3>
                            <span className={s.weight}>430 г</span>
                        </div>
                        <div className={s.description}>Описание</div>
                    </div>
                    <div className={s.switcherSize}>
                        <button className={s.productBtn}>23 см</button>
                        <button className={s.productBtn}>30 см</button>
                    </div>
                    <div className={s.switcherThickness}>
                        <button className={s.productBtn}>Тонкое</button>
                        <button className={s.productBtn}>Традиционное</button>
                    </div>
                    <div className={s.registration}>
                        <span className={s.price}> 450 &#8381;</span>
                        <button className={s.btnAdd}>В корзину</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductElem;