import { connect } from 'react-redux';
import Products from './Products/Products';
import React from 'react';
import { updateBasket } from '../../redux/basket-reducer';
import { BasketType, ElemType } from '../../../types/types';

type OwnPropsType = {
	title : string
	basket : BasketType
	products : Array<ElemType> 
	indicatorHit?  : boolean 
}

type MapDispatchPropsType = {
	updateBasket : (elem : any, amount : number, sumPrice : number, weightPizza : boolean) => void
}

type PropsType = OwnPropsType & MapDispatchPropsType;

class ProductsContainer extends React.Component<PropsType> {

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


export default connect <null,MapDispatchPropsType, OwnPropsType>
(null, {
	updateBasket: updateBasket
})(ProductsContainer);
