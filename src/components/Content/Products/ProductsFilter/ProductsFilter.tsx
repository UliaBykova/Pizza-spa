import react from 'react';
import s from './ProductsFilter.module.css';

type TProps = {
	title : string
	indicatorHit : boolean
}

const ProductsFilter:React.FC<TProps> = (props) => {

	return (
		<div className={s.content}>
			<div className={s.titleBlock}>
				<h2 className={s.title}>{props.title}</h2>
				{props.indicatorHit ? null : (
					<select className={s.filter}>
						<option>По популярности</option>
						<option>По цене (по возрастанию)</option>
						<option>По цене (по убыванию)</option>
					</select>
				)}
			</div>
		</div>
	);
};

export default ProductsFilter;
