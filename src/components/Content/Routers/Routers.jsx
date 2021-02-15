import React from 'react'
import { Route } from 'react-router-dom';
import Delivery from '../Delivery/Delivery';
import Order from '../Order/Order/Order';
import OrderContainer from '../Order/OrderContainer';
import ProductsContainer from '../Products/ProductsContainer';
import Promo from '../Promo/Promo';


const Routers = (props) => {
  const products = props.state.productPage.products.data;
  const japan = products.sets.concat(products.japan);

  return (
    <>
      <Route path='/pizza' render={() => <ProductsContainer products={products.pizza} title="Пицца" />} />
      <Route path='/japan' render={() => <ProductsContainer products={japan} title="Япония" basket={props.state.basketPage} />} />
      <Route path='/wok' render={() => <ProductsContainer products={products.wok} title="Wok" />} />
      <Route path='/paste' render={() => <ProductsContainer products={products.paste} title="Паста" />} />
      <Route path='/burgers' render={() => <ProductsContainer products={products.burgers} title="Бургеры" />} />
      <Route path='/salads' render={() => <ProductsContainer products={products.salads} title="Салаты" />} />
      <Route path='/potables' render={() => <ProductsContainer products={products.potables} title="Напитки" />} />
      <Route path='/deserts' render={() => <ProductsContainer products={products.deserts} title="Десерты" />} />
      <Route path='/delivery' render={() => <Delivery />} />
      <Route path='/promo' render={() => <Promo promo={props.state.promoPage.promo.data} />} />
      <Route path='/basket' render={() => <OrderContainer basket={props.state.basketPage} />} />
    </>
  )
}

export default Routers;