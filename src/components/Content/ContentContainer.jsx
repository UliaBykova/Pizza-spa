import React, { useEffect} from 'react' 
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from 'react-router-dom';
import { requestProducts } from '../redux/products-reducer'
import { requestPromo } from '../redux/promo-reducer'
import Preloader from '../common/Preloader/Preloader';
import s from "./ContentContainer.module.css"
import ProductsContainer from './Products/ProductsContainer';
import Delivery from './Delivery/Delivery';
import Promo from './Promo/Promo';
import OrderContainer from './Order/OrderContainer';
import HomePage from './HomePage/HomePage';

const ContentContainer = () => {
   
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const products = state.productPage.products.data;
  const promo = state.promoPage.promo.data;

  useEffect(() => {
    dispatch(requestProducts());
    dispatch(requestPromo());
  }, []);

    return (
        <div className={s.container}>
     { !products || !promo ? <Preloader /> 
      :  <>
       <Switch>
       <Route path='/pizza' render={() => <ProductsContainer products={products.pizza} title="Пицца" basket={state.basketPage} />} />
      <Route path='/japan' render={() => <ProductsContainer products={products.sets.concat(products.japan)} title="Япония" basket={state.basketPage} />} />
      <Route path='/wok' render={() => <ProductsContainer products={products.wok} title="Wok" basket={state.basketPage} />} />
      <Route path='/paste' render={() => <ProductsContainer products={products.paste} title="Паста" basket={state.basketPage} />} />
      <Route path='/burgers' render={() => <ProductsContainer products={products.burgers} title="Бургеры" basket={state.basketPage} />} />
      <Route path='/salads' render={() => <ProductsContainer products={products.salads} title="Салаты" basket={state.basketPage} />} />
      <Route path='/potables' render={() => <ProductsContainer products={products.potables} title="Напитки" basket={state.basketPage} />} />
      <Route path='/deserts' render={() => <ProductsContainer products={products.deserts} title="Десерты" basket={state.basketPage} />} />
      <Route path='/promo' render={() => <Promo promo={promo} />} />
      <Route path='/basket' render={() => <OrderContainer basket={state.basketPage} />} />
      <Route path='/delivery' render={() => <Delivery />} />
      <Route path='' render={() => <HomePage promo={promo} products={products.hit} title="Хиты" basket={state.basketPage} indicatorHit={true} />} />
      </Switch>
      </>}
        </div>
    )
}

export default ContentContainer;
