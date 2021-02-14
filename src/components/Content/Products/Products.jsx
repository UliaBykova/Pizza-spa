import React from 'react'
import ProductElem from '../../Content/Products/ProductElem/ProductElem';
import s from './Products.module.css'
import ProductsFilter from './ProductsFilter/ProductsFilter';

const Products = (props) => {

  

  return ( 
    <div className={s.wrapper}>
        <ProductsFilter title={props.title} />
      <div className={s.productContainer}>
        <ProductElem products={props.products} />
      </div>
    </div>
  )
}

export default Products;
