import {
    basketAPI
} from '../../api/api';
import { ElemType } from '../../types/types';

const SET_SELECTED_ELEM = 'SET_SELECTED_ELEM';
const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
const DELETE_PRODUCT_TO_BASKET = 'DELETE_PRODUCT_TO_BASKET';

type InitialStateType = typeof initialState;

let initialState = {
    selectedElem: [] as Array<ElemType>,
    amountElem: 0,
    sum: 0,
};

const basketReducer = (state = initialState, action : any) : InitialStateType => {
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

export const requestSelectedElem = () => {
    return (dispatch : any) => {
        basketAPI.getBasket().then((response : any) => {
            dispatch(setSelectedElemAC(response.selectedElem, response.amountElem, response.sum));
        });
    };
};

export const updateBasket = (elem : ElemType, amount : number, sum : number, weightPizza : boolean) => {
    return (dispatch : any) => {
        basketAPI.updateBasket(elem, amount, sum, weightPizza).then((response) => {
           console.log(response);
            dispatch(addProductToBasketAC(elem, amount, sum, weightPizza));
        });
    };
};

export const deleteProductTC = (productId : number) => {
    return (dispatch : any) => {
        basketAPI.deleteProduct(productId).then((response) => {
            dispatch(deleteProductToBasketAC(response[0], response[1], response[2]));
        })
    }
}

export default basketReducer;

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