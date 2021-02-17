import {
    basketAPI
} from '../../api/api';

const SET_SELECTED_ELEM = 'SET_SELECTED_ELEM';
const ADD_PRODUCT_TO_BASKET = 'ADD_PRODUCT_TO_BASKET';
const DELETE_PRODUCT_TO_BASKET = 'DELETE_PRODUCT_TO_BASKET';

let initialState = {
    selectedElem: [],
    amountElem: 0,
    sum: 0,
};

const basketReducer = (state = initialState, action) => {
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
                selectedElem: [...state.selectedElem, action.elem],
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

export const setSelectedElemAC = (selectedElem, amountElem, sum) => ({
    type: SET_SELECTED_ELEM,
    selectedElem,
    amountElem,
    sum
});

export const addProductToBasketAC = (elem, amount, sum) => ({
    type: ADD_PRODUCT_TO_BASKET,
    elem,
    amount,
    sum
});

export const deleteProductToBasketAC = (selectedElem, amountElem, sum) => ({
    type: DELETE_PRODUCT_TO_BASKET,
    selectedElem, amountElem, sum
})

export const requestSelectedElem = () => {
    return (dispatch) => {
        basketAPI.getBasket().then((response) => {
            dispatch(setSelectedElemAC(response.selectedElem, response.amountElem, response.sum));
        });
    };
};

export const updateBasket = (elem, amount, sum) => {
    return (dispatch) => {
        basketAPI.updateBasket(elem, amount, sum).then(() => {
            dispatch(addProductToBasketAC(elem, amount, sum));
        });
    };
};

export const deleteProductTC = (productId) => {
    return (dispatch) => {
        basketAPI.deleteProduct(productId).then((response) => {
            dispatch(deleteProductToBasketAC(response[0], response[1], response[2]));
        })
    }
}

export default basketReducer;