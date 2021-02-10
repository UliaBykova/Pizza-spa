import React, { useEffect } from 'react'
import ProductElem from './ProductElem/ProductElem';
import s from './Products.module.css'
import { connect, useDispatch, useSelector } from "react-redux"
import {requestProducts, setProductsAC, SET_PRODUCTS} from '../redux/products-reducer'
import { productsAPI } from '../../api/api';

const Products = () => {
    const state = useSelector((state) => state.productPage);
    const dispatch = useDispatch();

     useEffect( async () => {
            const response = await productsAPI.getProducts();
            dispatch(setProductsAC(response.data));
     }, []);

        console.log(state);

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
        <div className={s.productContainer}>
          <ProductElem  /> 
        </div>
{/*             {products ? <h1>{products}</h1> : <h1>Данных нет</h1>} */}
    </div>
)
}

/* let mapStateToProps = (state) => {
    return {
        products : state.productPage.products.data
    }
}

export default connect(mapStateToProps, {requestProducts})(Products); */

export default Products;