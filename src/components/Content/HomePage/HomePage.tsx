import React from 'react';
import ProductsContainer from '../Products/ProductsContainer';
import MySwiper from './MySwiper/MySwiper';
import s from './HomePage.module.css';
import {TBasket, TElem} from '../../../types/types';

type TProps = {
	promo : [{
		id : number
		image : string   
	  }]
	products : Array<TElem>
	title : string
	basket : TBasket
	indicatorHit : boolean
}

const HomePage:React.FC<TProps> = (props) => {
	return (
		<div className={s.container}>
			<MySwiper promo={props.promo} />
			<ProductsContainer
				products={props.products}
				title="Хиты"
				basket={props.basket}
				indicatorHit={props.indicatorHit}
			/>
			<div>
				<h3 className={s.subtitle}> Преимущества заказать пиццу на дом</h3>
				<p className={s.text}>
					Можно насчитать большое количество преимуществ заказа пиццы на дом. Не
					нужно стоять возле плиты и бегать по магазинам, тратить деньги, а главное,
					собственное драгоценное время. Телепицца предлагает возможность выбрать
					блюдо подходящего размера, удовлетворяющее любым вкусовым предпочтениям. А
					пицца по акции во Владикавказе, это еще и бесплатная доставка не дольше 60
					минут. У Вас есть возможность попробовать сразу несколько рецептов, а
					главное, не надо подниматься с дивана - просто позвонить или выйти в
					интернет, сделать заказ и наслаждаться вкусным блюдом.
				</p>
				<h3 className={s.subtitle}> Плюсы заказа еды на дом</h3>
				<p className={s.text}>
					Вкусная пицца на дом, высокое качество, бесплатная доставка, выгодные акции
					– все это становится причиной устойчивого роста популярности нашей пиццы.
					Наши гостит экономят денежные средства и время, особенно, когда делают
					заказ акционной пиццы.
				</p>
				<p className={s.text}>
					Бронирование заказа на определенную дату. Доставляем пиццу по Владикавказу
					бесплатно в любую точку. Возможна оплата на сайте, по карте курьеру, а
					также за наличный расчет.
				</p>
			</div>
		</div>
	);
};

export default HomePage;
