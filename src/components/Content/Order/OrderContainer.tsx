import React from 'react';
import { connect } from 'react-redux';
import { TBasket } from '../../../types/types';
import { deleteProductTC } from '../../redux/basket-reducer';
import Order from './Order/Order';

type TOwnProps = {
	basket : TBasket
}

type TMapDispatchProps = {
	deleteProductToBasket : (id : number) => void
}

type TProps = TOwnProps & TMapDispatchProps;

class OrderContainer extends React.Component<TProps> {
	render() {		
		return (
			<Order
				basket={this.props.basket}
				deleteProductToBasket={this.props.deleteProductToBasket}
			/>
		);
	}
}

export default connect <null,TMapDispatchProps, TOwnProps>
(null, {
	deleteProductToBasket: deleteProductTC,
})(OrderContainer);
