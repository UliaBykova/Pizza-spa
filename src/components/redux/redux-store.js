import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./products-reducer";
import promoReducer from "./promo-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
  productPage : productReducer,
  promoPage : promoReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;