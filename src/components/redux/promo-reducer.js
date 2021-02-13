import { promoAPI } from "../../api/api";

const SET_PROMO = 'SET_PROMO';

let initialState = {
    promo : []
}

const promoReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PROMO : {
            return {...state, promo : action.promo}
        }
        default : 
        return state;
    }
}

export const setPromoAC = (promo) => ({type : SET_PROMO, promo});

export const requestPromo = () => {
    return (dispatch) => {
        promoAPI.getPromo().then(data => {
            dispatch(setPromoAC(data));
        })
    }
}


export default promoReducer;