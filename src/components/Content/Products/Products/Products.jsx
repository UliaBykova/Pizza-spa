import React from 'react'
import ProductElem from '../ProductElem/ProductElem';
import s from './../Products.module.css'
import ProductsFilter from '../ProductsFilter/ProductsFilter';

const Products = (props) => {

  /*   console.log(props); */

  return (
    <div className={s.wrapper}>
      <ProductsFilter title={props.title} />
      <div className={s.productContainer}>
        <ProductElem products={props.products} basket={props.basket} updateBasket={props.updateBasket} />
      </div>
    </div>
  )
}

export default Products;
