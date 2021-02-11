import React from 'react'
import s from './../Products.module.css'

const ProductElem = (props) => {
    return ( 
           <>
            {
            props.products.map(elem =>   
             <div key={elem.id} className={s.productBlock}>
                <img src={elem.image} alt="pizza" className={s.photo} />
            <div className={s.productContent}>
                <div>
                        <div className={s.productInfo}>
                            <h3 className={s.productName}>{elem.name}</h3>
                            <span className={s.weight}>{elem.weightThinS} г</span>
                        </div>
                        <div className={s.description}>{elem.composition}</div>
                </div>
                <div>
                     <div className={s.switcherSize}>
                        <button className={s.productBtn}>23 см</button>
                        <button className={s.productBtn}>30 см</button>
                     </div>
                     <div className={s.switcherThickness}>
                        <button className={s.productBtn}>Тонкое</button>
                        <button className={s.productBtn}>Традиционное</button>
                     </div>
                </div>
                    <div className={s.registration}>
                        <span className={s.price}> {elem.priceSizeSmall} &#8381;</span>
                        <button className={s.btnAdd}>В корзину</button>
                    </div>
        
            </div>
             </div>) 
            }
           </>
    )
}

export default ProductElem;