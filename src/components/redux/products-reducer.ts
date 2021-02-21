import { productsAPI } from '../../api/api';
import { ElemType } from '../../types/types';

const SET_PRODUCTS = 'SET_PRODUCTS';

type InitialStateType = typeof initialState;

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

export const requestProducts = () => {
	return (dispatch: any) => {
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
