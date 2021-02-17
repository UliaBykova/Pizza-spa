import React from 'react'
import { Route } from 'react-router-dom';
import Delivery from '../Delivery/Delivery';
import OrderContainer from '../Order/OrderContainer';
import ProductsContainer from '../Products/ProductsContainer';
import Promo from '../Promo/Promo';


const Routers = (props) => {
  const products = props.state.productPage.products.data;
  const japan = products.sets.concat(products.japan);

  return (
    <>
      <Route path='/pizza' render={() => <ProductsContainer products={products.pizza} title="Пицца" basket={props.state.basketPage} indicatorPizza={true} />} />
      <Route path='/japan' render={() => <ProductsContainer products={japan} title="Япония" basket={props.state.basketPage} />} />
      <Route path='/wok' render={() => <ProductsContainer products={products.wok} title="Wok" basket={props.state.basketPage} />} />
      <Route path='/paste' render={() => <ProductsContainer products={products.paste} title="Паста" basket={props.state.basketPage} />} />
      <Route path='/burgers' render={() => <ProductsContainer products={products.burgers} title="Бургеры" basket={props.state.basketPage} />} />
      <Route path='/salads' render={() => <ProductsContainer products={products.salads} title="Салаты" basket={props.state.basketPage} />} />
      <Route path='/potables' render={() => <ProductsContainer products={products.potables} title="Напитки" basket={props.state.basketPage} />} />
      <Route path='/deserts' render={() => <ProductsContainer products={products.deserts} title="Десерты" basket={props.state.basketPage} />} />
      <Route path='/delivery' render={() => <Delivery />} />
      <Route path='/promo' render={() => <Promo promo={props.state.promoPage.promo.data} />} />
      <Route path='/basket' render={() => <OrderContainer basket={props.state.basketPage} />} />
    </>
  )
}

export default Routers;