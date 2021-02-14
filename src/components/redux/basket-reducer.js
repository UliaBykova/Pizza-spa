import { basketAPI } from "../../api/api";

const SET_SELECTED_ELEM = 'SET_SELECTED_ELEM';

let initialState = {
    selectedElem : [],
    amountElem: 0,
    sum: 0
}

const basketReducer = (state = initialState, action) => {
   switch(action.type) {
       case SET_SELECTED_ELEM : {
        return {...state, selectedElem : action.selectedElem}
       }
       default :
       return state;
   }
}

export const setSelectedElemAC = (selectedElem) => ({type : SET_SELECTED_ELEM, selectedElem});

export const requestSelectedElem = () => {
    return (dispatch) => {
        basketAPI.getBasket().then(data => {
            dispatch(setSelectedElemAC(data));
        })
    }
}

export default basketReducer;