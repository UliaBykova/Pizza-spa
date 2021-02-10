import React, { useEffect } from 'react'
import ProductElem from './ProductElem/ProductElem';
import s from './Products.module.css'
import { useDispatch, useSelector } from "react-redux"
import { requestProducts } from '../redux/products-reducer'
import ProductsFilter from './ProductsFilter/ProductsFilter';

const ProductsContainer = () => {
  const state = useSelector((state) => state.productPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  }, []);

  console.log(state);

  return (
    <div className={s.wrapper}>
        <ProductsFilter />
      <div className={s.productContainer}>
        <ProductElem />
      </div>
    </div>
  )
}


export default ProductsContainer;

/*             {products ? <h1>{products}</h1> : <h1>Данных нет</h1>} */