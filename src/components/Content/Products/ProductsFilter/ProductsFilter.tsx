import React, { useState } from 'react';
import { TElem } from '../../../../types/types';
import s from './ProductsFilter.module.css';

 type TProps = {
	title : string
	indicatorHit?: boolean | undefined
	filterProducts : (products : Array<TElem>, 	keys : string ) => void
	keys : string 
	products : Array<TElem>
} 

const ProductsFilter:React.FC<TProps> = (props) => { 
	const [filterState, setFilterState] = useState("");

    const handleChange = (event : any) => {
	  const selectedFilter = event.target.value;
	  setFilterState(selectedFilter);
	  console.log(filterState);
       props.filterProducts(props.products, props.keys);
   }


	   return (
		   <div className={s.content}>
			   <div className={s.titleBlock}>
				   <h2 className={s.title}>{props.title}</h2>
				   {props.indicatorHit ? null : (
					   <select className={s.filter} onChange={handleChange} value={filterState}>
						   <option value="popular">По популярности</option>
						   <option value="lowPrice">По цене (по возрастанию)</option>
						   <option value="highPrice">По цене (по убыванию)</option>
					   </select>
				   )}
			   </div>
		   </div>
	   );
};

export default ProductsFilter;
