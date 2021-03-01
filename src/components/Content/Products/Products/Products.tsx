import React from 'react';
import ProductElem from '../ProductElem/ProductElem';
import s from './../Products.module.css';
import ProductsFilter from '../ProductsFilter/ProductsFilter';
import { TBasket, TElem } from '../../../../types/types';

type TProps = {
	basket: TBasket;
	products: Array<TElem>;
	updateBasket: (elem: any, weightPizza: boolean) => void;
	filterProducts : (products : Array<TElem>, 	keys : string) => void
	title: string;
	keys : string 
	indicatorHit?: boolean | undefined;
};

const Products: React.FC<TProps> = (props) => {

	return (
		<div className={s.wrapper}>
			<ProductsFilter
			 products={props.products}
			 keys={props.keys}
			 title={props.title} 
			 filterProducts={props.filterProducts}
			 indicatorHit={props.indicatorHit} />
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
