import React from 'react'
import MySwiper from './MySwiper/MySwiper';

const HomePage = (props) => {

    return (
       <>
       <MySwiper promo={props.promo} />
       </>
    )
}

export default HomePage