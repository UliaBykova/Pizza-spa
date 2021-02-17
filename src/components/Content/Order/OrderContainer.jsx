import React from 'react';
import { connect } from 'react-redux';
import { deleteProductTC } from '../../redux/basket-reducer';
import Order from './Order/Order';

class OrderContainer extends React.Component {
	render() {
		return (
			<Order
				basket={this.props.basket}
				deleteProductToBasket={this.props.deleteProductToBasket}
			/>
		);
	}
}

export default OrderContainer = connect(null, {
	deleteProductToBasket: deleteProductTC,
})(OrderContainer);
