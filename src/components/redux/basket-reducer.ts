import { Dispatch } from 'redux';
import {
    basketAPI
} from '../../api/api';
import { BasketType, ElemType } from '../../types/types';
import { AppStateType } from './redux-store';

const SET_SELECTED_ELEM = 'SET_SELECTED_ELEM';
const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
const DELETE_PRODUCT_TO_BASKET = 'DELETE_PRODUCT_TO_BASKET';

type InitialStateType = typeof initialState;

let initialState = {
    selectedElem: [] as Array<ElemType>,
    amountElem: 0,
    sum: 0,
};

const basketReducer = (state = initialState, action : ActionTypes) : InitialStateType => {
    switch (action.type) {
        case SET_SELECTED_ELEM: {
            return {
                ...state,
                selectedElem: action.selectedElem,
                amountElem: action.amountElem,
                sum: action.sum
            };
        }
        case ADD_PRODUCT_TO_BASKET: {
            return {
                ...state,
                selectedElem: [...state.selectedElem, {...action.elem, amount : 1, weightPizza : action.weightPizza ? 'Традиционное' : 'Тонкое' }],
                amountElem: action.amount,
                sum: action.sum
            };
        }
        case DELETE_PRODUCT_TO_BASKET: {
            return {
                ...state,
                selectedElem: action.selectedElem,
                amountElem : action.amountElem,
                sum : action.sum
            }
        }
        default:
            return state;
    }
};

export const setSelectedElemAC = (selectedElem : Array<ElemType>, amountElem : number , sum : number) : SetSelectedElemACType  => ({
    type: SET_SELECTED_ELEM,
    selectedElem,
    amountElem,
    sum
});

export const addProductToBasketAC = (elem : ElemType, amount : number, sum : number, weightPizza : boolean) : AddProductToBasketACType => ({
    type: ADD_PRODUCT_TO_BASKET,
    elem,
    amount,
    sum,
    weightPizza
});

export const deleteProductToBasketAC = (selectedElem : Array<ElemType>, amountElem : number, sum : number) : DeleteProductToBasketACType => ({
    type: DELETE_PRODUCT_TO_BASKET,
    selectedElem, amountElem, sum
})

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;

export const requestSelectedElem = () => {
    return (dispatch : DispatchType, getState : GetStateType) => {      
        basketAPI.getBasket().then((response : BasketType) => {
            dispatch(setSelectedElemAC(response.selectedElem, response.amountElem, response.sum));
        });
    };
};

export const updateBasket = (elem : ElemType, amount : number, sum : number, weightPizza : boolean) => {
    return (dispatch : DispatchType, getState : GetStateType) => {
        basketAPI.updateBasket(elem, amount, sum, weightPizza).then(() => {
            dispatch(addProductToBasketAC(elem, amount, sum, weightPizza));
        });
    };
};

export const deleteProductTC = (productId : number) => {
    return (dispatch : DispatchType, getState : GetStateType) => {
        basketAPI.deleteProduct(productId).then((response : Array<Array<ElemType> & number>) => {
            dispatch(deleteProductToBasketAC(response[0], response[1], response[2]));
        })
    }
}

export default basketReducer;

type ActionTypes = SetSelectedElemACType | AddProductToBasketACType | DeleteProductToBasketACType;

type SetSelectedElemACType = {
    type: typeof SET_SELECTED_ELEM,
    selectedElem : Array<ElemType>
    amountElem : number
    sum : number
}

type AddProductToBasketACType = {
    type : typeof ADD_PRODUCT_TO_BASKET
    elem : ElemType
    amount : number
    sum : number
    weightPizza : string | boolean
}

type DeleteProductToBasketACType = {
    type: typeof DELETE_PRODUCT_TO_BASKET
    selectedElem :  Array<ElemType>
    amountElem : number
    sum : number
}