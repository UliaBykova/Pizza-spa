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
  const products = state.productPage.products;
  const loadingProducts = state.productPage.loading;
  const promo = state.promoPage.promo;

  useEffect(() => {
    dispatch(requestProducts());
    dispatch(requestPromo());
  }, []);

    return (
      <div className={s.container}>
     { loadingProducts ?
       <>
        <Switch>
            <Route path='/pizza' render={() => <ProductsContainer products={products.pizza} title="Пицца" basket={state.basketPage} keys="pizza" />} />
            <Route path='/japan' render={() => <ProductsContainer products={products.japan} title="Япония" basket={state.basketPage} keys="japan" />} />
            <Route path='/wok' render={() => <ProductsContainer products={products.wok} title="Wok" basket={state.basketPage} keys="wok" />} />
            <Route path='/paste' render={() => <ProductsContainer products={products.paste} title="Паста" basket={state.basketPage} keys="paste"  />} />
            <Route path='/burgers' render={() => <ProductsContainer products={products.burgers} title="Бургеры" basket={state.basketPage} keys="burgers" />} />
            <Route path='/salads' render={() => <ProductsContainer products={products.salads} title="Салаты" basket={state.basketPage} keys="salads" />} />
            <Route path='/potables' render={() => <ProductsContainer products={products.potables} title="Напитки" basket={state.basketPage} keys="potables" />} />
            <Route path='/deserts' render={() => <ProductsContainer products={products.deserts} title="Десерты" basket={state.basketPage} keys="deserts" />} />
            <Route path='/promo' render={() => <Promo promo={promo} />} />
            <Route path='/basket' render={() => <OrderContainer basket={state.basketPage} />} />
            <Route path='/delivery' render={() => <Delivery />} />
            <Route path='' render={() => <HomePage promo={promo} products={products.hit} title="Хиты" basket={state.basketPage} indicatorHit={true} />} />
            </Switch>
        </>
      :
      <Preloader /> }
        </div>
    )
}

export default ContentContainer;
