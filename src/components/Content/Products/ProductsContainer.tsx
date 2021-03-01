import { connect } from 'react-redux';
import Products from './Products/Products';
import React from 'react';
import { updateBasket } from '../../redux/basket-reducer';
import { TBasket, TElem } from '../../../types/types';
import { filterLowPriceAC } from '../../redux/products-reducer';

type TOwnProps = {
	title : string
	basket : TBasket
	products : Array<TElem> 
	keys : string 
	indicatorHit?  : boolean | undefined
}

type TMapDispatchProps = {
	updateBasket : (elem : any, weightPizza : boolean) => void
	filterProducts : (products : Array<TElem>, 	keys : string ) => void
}

type TProps = TOwnProps & TMapDispatchProps;

class ProductsContainer extends React.Component<TProps> {
	render() {
		return (
			<Products
				products={this.props.products}
				title={this.props.title}
				keys={this.props.keys}
				indicatorHit={this.props.indicatorHit}
				updateBasket={this.props.updateBasket}
				filterProducts={this.props.filterProducts}
				basket={this.props.basket}
			/>
		);
	}
}


export default connect <null,TMapDispatchProps, TOwnProps>
(null, {
	updateBasket: updateBasket,
	filterProducts : filterLowPriceAC
})(ProductsContainer);
