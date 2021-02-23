import { TPromo } from './../../types/types';
import { promoAPI } from "../../api/api";
import { AppStateType } from './redux-store';
import { Dispatch } from 'redux';

const SET_PROMO = 'SET_PROMO';

type InitialStateType = typeof initialState;

type ActionTypes = SetPromoACType;

let initialState = {
    promo : [] as Array<TPromo> 
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

export const setPromoAC = (promo : TPromo ): SetPromoACType => ({type : SET_PROMO, promo});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;

export const requestPromo = () => {
    return (dispatch : DispatchType, getState : GetStateType) => {
        promoAPI.getPromo().then((data : any) => {
            dispatch(setPromoAC(data));
        })
    }
}


export default promoReducer;

type SetPromoACType = {
    type : typeof SET_PROMO,
    promo : TPromo 
}
