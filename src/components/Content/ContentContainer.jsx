import React, { useEffect } from 'react' 
import { Route } from 'react-router-dom';
import MyPizza from "../Pizza";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux"
import { requestProducts } from '../redux/products-reducer'

const ContentContainer = () => {
   
  const state = useSelector((state) => state.productPage.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestProducts());
  }, []);


    return (
        <div>
              <Route path='/pizza'
                render={() => <Products products={state.data.pizza} />} />
              <Route path='/hit'
                render={() => <MyPizza />} />
        </div>
    )
}

export default ContentContainer;