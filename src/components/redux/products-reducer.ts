import { TElem } from './../../types/types';
import { Dispatch } from 'redux';
import { productsAPI } from '../../api/api';
import { AppStateType } from './redux-store';

const SET_PRODUCTS = 'SET_PRODUCTS';
const FILTER_LOW_PRICE = 'FILTER_LOW_PRICE';

type InitialStateType = typeof initialState;
type ActionTypes = SetProductsACType | FilterLowPriceACType;

let initialState = {
	products: [] as Array<TElem>,
	loading: false,
};

const productReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return { ...state, products: action.products, loading : true};
		}
		case FILTER_LOW_PRICE: {
			const key = action.key;
			console.log(action);
			
       		return {
				...state,
				products : {
				   ...state.products,
					[action.key] : action.products.slice().sort((a : any, b : any) => a.price - b.price)
				}
			};
		}
		default:
			return state;
	}
};

/* window.store.getState().productPage.products */

export const setProductsAC = (products: TServerData): SetProductsACType => ({
	type: SET_PRODUCTS,
	products,
});

export const filterLowPriceAC = (products: Array<TElem>, key : string): FilterLowPriceACType => ({
	type: FILTER_LOW_PRICE,
	products,
	key
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;

export const requestProducts = () => {
	return (dispatch: DispatchType, getState: GetStateType) => {
		productsAPI.getProducts().then((response: any) => {
			dispatch(setProductsAC(response));
		});
	};
};

export default productReducer;
type ProductsKeys =
	| 'pizza'
	| 'japan'
	| 'sets'
	| 'wok'
	| 'paste'
	| 'salads'
	| 'potables'
	| 'deserts'
	| 'hit';
type TServerData = { [key in ProductsKeys]: Array<TElem> };

type SetProductsACType = {
	type: typeof SET_PRODUCTS;
	products: TServerData;
};

type FilterLowPriceACType = {
	type: typeof FILTER_LOW_PRICE;
	products: Array<TElem>;
	key : string
};
