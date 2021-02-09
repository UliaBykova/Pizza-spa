import React from 'react'
import ProductElem from './ProductElem/ProductElem';
import s from './Products.module.css'
import { connect, useSelector } from "react-redux"
import {requestProducts} from '../redux/products-reducer'

class Products extends React.Component {
    componentDidMount() {
       this.props.requestProducts();
    }
    render () {
/*     const {products} = useSelector((state) => state.productPage) */
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
          <ProductElem products={this.props.products} /> 
        </div>
{/*             {products ? <h1>{products}</h1> : <h1>Данных нет</h1>} */}
    </div>
)
    }
}

let mapStateToProps = (state) => {
    return {
        products : state.productPage.products.data
    }
}

export default connect(mapStateToProps, {requestProducts})(Products);