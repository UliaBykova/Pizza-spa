import React from 'react';
import ProductElem from '../ProductElem/ProductElem';
import s from './../Products.module.css';
import ProductsFilter from '../ProductsFilter/ProductsFilter';
import { BasketType, ElemType } from '../../../../types/types';

type PropsType = {
	basket : BasketType
	products : Array<ElemType> 
	updateBasket : (elem : any, amount : number, sumPrice : number, weightPizza : boolean) => void, 
	title : string
	indicatorHit? : boolean
}

const Products : React.FC<PropsType> = (props : any) => {

	return (
		<div className={s.wrapper}>
			<ProductsFilter title={props.title} indicatorHit={props.indicatorHit} />
			<div className={s.productContainer}>
				<ProductElem
					products={props.products}
					basket={props.basket}
					updateBasket={props.updateBasket}
				/>
			</div>
		</div>
	);
};

export default Products;
