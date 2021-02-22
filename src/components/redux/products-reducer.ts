import { Dispatch } from 'redux';
import { productsAPI } from '../../api/api';
import { ElemType } from '../../types/types';
import { AppStateType } from './redux-store';

const SET_PRODUCTS = 'SET_PRODUCTS';

type InitialStateType = typeof initialState;
type ActionTypes = SetProductsACType;

let initialState = {
	products: [] as Array<ElemType>,
	loading: false,
};

const productReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return { ...state, products: action.products };
		}
		default:
			return state;
	}
};

export const setProductsAC = (products: Array<ElemType>) : SetProductsACType => ({
	type: SET_PRODUCTS,
	products,
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;

export const requestProducts = () => {
	return (dispatch : DispatchType, getState : GetStateType) => {
		productsAPI.getProducts().then((data: any) => {
			dispatch(setProductsAC(data));
		});
	};
};

export default productReducer;

type SetProductsACType = {
	type: typeof SET_PRODUCTS
	products : Array<ElemType>
}
