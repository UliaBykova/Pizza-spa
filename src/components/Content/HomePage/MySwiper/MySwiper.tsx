import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import '../../../../../node_modules/swiper/swiper-bundle.css';
import s from '../HomePage.module.css';

type TProps = {
	promo : [{
		id : number
		image : string   
	  }]
};

const MySwiper:React.FC<TProps> = (props) => {

	const promo = props.promo;
	SwiperCore.use([Autoplay]);

	const params = {
		spaceBetween: 1350,
		slidesPerView: 1,
        speed: 1000,
        autoHeight : true,
		autoplay: {
			delay: 2000,
			disableOnInteraction: false,
		},
		coverflowEffect: {
			rotate: 180,
			slideShadows: false,
		},
	};

	return (
		<Swiper {...params} className={`${s.container} ${s.swiper}`}>
			{promo.map((el) => {
				return (
					<SwiperSlide key={el.id}>
						<img src={el.image} alt="promo" className={s.promo}></img>
					</SwiperSlide>
				);
			})}
		</Swiper>
	);
};

export default MySwiper;
