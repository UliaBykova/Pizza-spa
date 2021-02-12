import react from "react";
import s from "./ProductsFilter.module.css"

const ProductsFilter = () => {
    return (
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
    )
}

export default ProductsFilter;