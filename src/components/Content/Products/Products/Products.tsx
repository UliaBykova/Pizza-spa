import React from 'react';
import ProductElem from '../ProductElem/ProductElem';
import s from './../Products.module.css';
import ProductsFilter from '../ProductsFilter/ProductsFilter';
import { TBasket, TElem } from '../../../../types/types';

type TProps = {
	basket : TBasket
	products : Array<TElem> 
	updateBasket : (selectedElem : Array<TElem>, elem : any, weightPizza : boolean) => void, 
	title : string
	indicatorHit? : boolean
}

const Products : React.FC<TProps> = (props : any) => {

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
