import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from "react-redux"
import { requestProducts } from '../redux/products-reducer'
import { requestPromo } from '../redux/promo-reducer'
import Preloader from '../common/Preloader/Preloader';
import s from "./ContentContainer.module.css"
import Routers from "./Routers/Routers"

const ContentContainer = () => {
   
  const state= useSelector((state) => state);
  const dispatch = useDispatch();
  const loading = state.productPage.loading;

  useEffect(() => {
    dispatch(requestProducts());
    dispatch(requestPromo());
  }, []);

    return (
        <div className={s.container}>
              {loading 
              ? <Routers state={state} />
              : <Preloader />}
        </div>
    )
}

export default ContentContainer;
