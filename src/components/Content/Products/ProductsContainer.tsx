import { connect } from 'react-redux';
import Products from './Products/Products';
import React from 'react';
import { updateBasket } from '../../redux/basket-reducer';
import { TBasket, TElem } from '../../../types/types';

type TOwnProps = {
	title : string
	basket : TBasket
	products : Array<TElem> 
	indicatorHit?  : boolean 
}

type TMapDispatchProps = {
	updateBasket : (selectedElem : Array<TElem>, elem : any, weightPizza : boolean) => void
}

type TProps = TOwnProps & TMapDispatchProps;

class ProductsContainer extends React.Component<TProps> {

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


export default connect <null,TMapDispatchProps, TOwnProps>
(null, {
	updateBasket: updateBasket
})(ProductsContainer);
