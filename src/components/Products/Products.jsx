import React from 'react'
import ProductElem from './ProductElem/ProductElem';
import s from './Products.module.css'
import ProductsFilter from './ProductsFilter/ProductsFilter';

const Products = (props) => {

  return (
    <div className={s.wrapper}>
        <ProductsFilter />
      <div className={s.productContainer}>
        <ProductElem products={props.products} />
      </div>
    </div>
  )
}


export default Products;

/*             {products ? <h1>{products}</h1> : <h1>Данных нет</h1>} */