import {basketAPI} from "../../api/api";

const SET_SELECTED_ELEM = 'SET_SELECTED_ELEM';
const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
const UPDATE_BASKET = 'UPDATE_BASKET';

let initialState = {
    selectedElem: [],
    amountElem: 0,
    sum: 0
}

const basketReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SELECTED_ELEM: {
            return {
                ...state,
                selectedElem: action.selectedElem
            }
        }
        case ADD_PRODUCT_TO_BASKET: {
            return {
                 ...state,
                selectedElem: [...state.selectedElem, action.elem]
            }
        }
        default:
            return state;
    }
}

export const setSelectedElemAC = (selectedElem) => ({
    type: SET_SELECTED_ELEM,
    selectedElem
});

export const addProductToBasketAC = (elem) => ({
    type: ADD_PRODUCT_TO_BASKET, elem
});

export const requestSelectedElem = () => {
    return (dispatch) => {
        basketAPI.getBasket().then(response => {
            dispatch(setSelectedElemAC(response.data.selectedElem));
        })
    }
}

export const updateBasket = (elem) => {
    return (dispatch) => {
        basketAPI.updateBasket(elem).then(response => {
            dispatch(addProductToBasketAC(elem));
        })
    }
}


export default basketReducer;