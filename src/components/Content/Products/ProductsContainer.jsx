import { connect } from 'react-redux';
import Products from './Products/Products';
import React from 'react';
import { updateBasket } from '../../redux/basket-reducer';
import { setSizePizza } from '../../redux/products-reducer';

class ProductsContainer extends React.Component {
	render() {
		return (
			<Products
				products={this.props.products}
				title={this.props.title}
				indicatorPizza={this.props.indicatorPizza}
				updateBasket={this.props.updateBasket}
                setSizePizza={this.props.setSizePizza}
				basket={this.props.basket}
			/>
		);
	}
}

export default ProductsContainer = connect(null, {
	updateBasket: updateBasket,
	setSizePizza: setSizePizza,
})(ProductsContainer);
