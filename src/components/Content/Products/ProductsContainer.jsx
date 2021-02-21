import { connect } from 'react-redux';
import Products from './Products/Products';
import React from 'react';
import { updateBasket } from '../../redux/basket-reducer';

class ProductsContainer extends React.Component {
	render() {
		return (
			<Products
				products={this.props.products}
				title={this.props.title}
				indicatorHit={this.props.indicatorHit}
				updateBasket={this.props.updateBasket}
				basket={this.props.basket}
			/>
		);
	}
}

export default ProductsContainer = connect(null, {
	updateBasket: updateBasket
})(ProductsContainer);
