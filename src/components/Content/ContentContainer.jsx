import React, { useEffect } from 'react' 
import { Route } from 'react-router-dom';
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux"
import { requestProducts } from '../redux/products-reducer'
import Preloader from '../common/Preloader/Preloader';
import s from "./ContentContainer.module.css"

const ContentContainer = () => {
   
  const state = useSelector((state) => state.productPage);
  const loading = state.loading;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  }, []);

    return (
        <div className={s.container}>
              {loading ? <Route path='/pizza'
               render={() => <Products products={state.products.data.pizza}/> } /> :  <Preloader />}
{/* {              <Route path='/hit'
                render={() => <Preloader />} />} */}
        </div>
    )
}

export default ContentContainer;