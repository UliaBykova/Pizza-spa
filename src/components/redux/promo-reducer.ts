import { PromoType } from './../../types/types';
import { promoAPI } from "../../api/api";

const SET_PROMO = 'SET_PROMO';

export type InitialStateType = {
  promo : Array<PromoType> 
}

let initialState : InitialStateType = {
    promo : []
}

const promoReducer = (state = initialState, action : any) : InitialStateType => {
    switch(action.type) {
        case SET_PROMO : {
            return {...state, promo : action.promo}
        }
        default : 
        return state;
    }
}

export const setPromoAC = (promo : PromoType ): SetPromoACType => ({type : SET_PROMO, promo});

export const requestPromo = () => {
    return (dispatch : any) => {
        promoAPI.getPromo().then((data : any) => {
            dispatch(setPromoAC(data));
        })
    }
}


export default promoReducer;

type SetPromoACType = {
    type : typeof SET_PROMO,
    promo : PromoType 
}
