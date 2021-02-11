import React from 'react' 
import { Route } from 'react-router-dom';
import Products from '../../Products/Products';


const RoutersProducts = (props) => {

  const japan = props.products.sets.concat(props.products.japan);

  return (
        <>
        <Route path='/pizza' render={() => <Products products={props.products.pizza}/> } /> 
        <Route path='/japan' render={() => <Products products={japan}/> } />
        <Route path='/wok' render={() => <Products products={props.products.wok} /> } />
        <Route path='/paste' render={() => <Products products={props.products.paste} />} />
        <Route path='/burgers' render={() => <Products products={props.products.burgers} />} />
        <Route path='/salads' render={() => <Products products={props.products.salads} />} />
        <Route path='/potables' render={() => <Products products={props.products.potables} />} />
        <Route path='/deserts' render={() => <Products products={props.products.deserts} />} />
        </>
  )
}

export default RoutersProducts;