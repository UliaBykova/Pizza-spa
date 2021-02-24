import React from 'react';
import { connect } from 'react-redux';
import { TBasket, TElem } from '../../../types/types';
import { decProduct, deleteProductAll, deleteProductTC, incProduct } from '../../redux/basket-reducer';
import Order from './Order/Order';

type TOwnProps = {
	basket : TBasket
}

type TMapDispatchProps = {
	deleteProductToBasket : (elem : TElem) => void
	deleteProductAll : (elem : TElem) => void
	incProduct : (elem : TElem) => void
	decProduct : (elem : TElem) => void
}

type TProps = TOwnProps & TMapDispatchProps;

class OrderContainer extends React.Component<TProps> {
	render() {		
		return (
			<Order
				basket={this.props.basket}
				deleteProductToBasket={this.props.deleteProductToBasket}
				deleteProductAll={this.props.deleteProductAll}
				incProduct = {this.props.incProduct}
				decProduct = {this.props.decProduct}
			/>
		);
	}
}

export default connect <null,TMapDispatchProps, TOwnProps>
(null, {
	deleteProductToBasket: deleteProductTC,
	deleteProductAll : deleteProductAll,
	incProduct : incProduct,
	decProduct : decProduct
})(OrderContainer);
