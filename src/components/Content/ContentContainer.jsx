import React, { useEffect } from 'react' 
import { useDispatch, useSelector } from "react-redux"
import { requestProducts } from '../redux/products-reducer'
import Preloader from '../common/Preloader/Preloader';
import s from "./ContentContainer.module.css"
import Routers from "./Routers/Routers"

const ContentContainer = () => {
   
  const state = useSelector((state) => state.productPage);
  const loading = state.loading;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  }, []);

    return (
        <div className={s.container}>
              {loading 
              ? <Routers products={state.products.data} />
              : <Preloader />}
        </div>
    )
}

export default ContentContainer;
