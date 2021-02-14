import React from 'react'
import { Route } from 'react-router-dom';
import Delivery from '../Delivery/Delivery';
import Order from '../Order/Order';
import Products from '../Products/Products';
import Promo from '../Promo/Promo';


const Routers = (props) => {
  const products = props.state.productPage.products.data;
  const japan = products.sets.concat(products.japan);

  return (
    <>
      <Route path='/pizza' render={() => <Products products={products.pizza} title="Пицца" />} />
      <Route path='/japan' render={() => <Products products={japan} title="Япония" />} />
      <Route path='/wok' render={() => <Products products={products.wok} title="Wok" />} />
      <Route path='/paste' render={() => <Products products={products.paste} title="Паста" />} />
      <Route path='/burgers' render={() => <Products products={products.burgers} title="Бургеры" />} />
      <Route path='/salads' render={() => <Products products={products.salads} title="Салаты" />} />
      <Route path='/potables' render={() => <Products products={products.potables} title="Напитки" />} />
      <Route path='/deserts' render={() => <Products products={products.deserts} title="Десерты" />} />
      <Route path='/delivery' render={() => <Delivery />} />
      <Route path='/promo' render={() => <Promo promo={props.state.promoPage.promo.data} />} />
      <Route path='/basket' render={() => <Order basket={props.state.basketPage} />} />
    </>
  )
}

export default Routers;