import React, { useEffect } from 'react';
import Basket from './Basket/Basket';
import { useDispatch, useSelector } from "react-redux";
import { requestSelectedElem } from '../../redux/basket-reducer';

const BasketContainer = () => {

  const basketPage = useSelector(state => state.basketPage.selectedElem.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestSelectedElem());
  }, [])

/*   console.log(basketPage); */

  return (
    <div>
      <Basket basketPage={basketPage} />
    </div>
  )
}

export default BasketContainer;