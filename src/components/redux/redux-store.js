import { applyMiddleware, combineReducers, createStore } from "redux";
import productReducer from "./products-reducer";
import thunkMiddleware from "redux-thunk";


let reducers = combineReducers({
  productPage : productReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;