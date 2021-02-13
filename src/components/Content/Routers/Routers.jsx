import React, { useState } from 'react' 
import { Route } from 'react-router-dom';
import ModalElem from '../../common/Modal/ModalElem';
import Delivery from '../Delivery/Delivery';
import Products from '../Products/Products';
import Promo from '../Promo/Promo';


const Routers = (props) => {

/*   const [modalActive, setModalActive] = useState(true); */

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
        <Route path='/delivery' render={() => <Delivery />} />
        <Route path='/promo' render={() => <Promo promo={props.promo} />} />

{/*         <button style={{margin : "100px", background : "red"}} onClick={() => setModalActive(true)}>Открыть</button>
        <ModalElem active={modalActive} setActive={setModalActive}>
          <p>12</p>
        </ModalElem> */}
        </>
  )
}

export default Routers;