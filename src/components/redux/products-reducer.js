import { productsAPI } from "../../api/api";

export const SET_PRODUCTS = 'SET_PRODUCTS';

let initialState = {
    products : [1, 2]
}

const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS : {
            return {...state, products : action.products}
        }
        default : 
        return state;
    }
}

export const setProductsAC = (products) => ({type : SET_PRODUCTS, products})

export const requestProducts = () => {
    return (dispatch) => {
        productsAPI.getProducts().then(data => {
            dispatch(setProductsAC(data));
        })
    }
}


export default productReducer;