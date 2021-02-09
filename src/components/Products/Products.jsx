import React from 'react'
import ProductElem from './ProductElem/ProductElem';
import s from './Products.module.css'

const Products = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.content}>
                <div className={s.titleBlock}>
                        <h2 className={s.title}>Пицца</h2>
                        <select className={s.filter}>
                            <option>По популярности</option>
                            <option>По цене (по возрастанию)</option>
                            <option>По цене (по убыванию)</option>
                        </select>
                </div>
            </div>
            <ProductElem />
        </div>
    )
}

export default Products;