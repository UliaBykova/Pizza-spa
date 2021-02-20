import { productsAPI } from '../../api/api';

const SET_PRODUCTS = 'SET_PRODUCTS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';

let initialState = {
	products: [],
	loading: false
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return { ...state, products: action.products };
		}
/* 		case TOGGLE_IS_LOADING: {
			return { ...state, loading: action.loading };
		} */
		default:
			return state;
	}
};

export const setProductsAC = (products) => ({ type: SET_PRODUCTS, products });
/* export const toggleIsLoadingAC = (loading) => ({
	type: TOGGLE_IS_LOADING,
	loading,
}); */

export const requestProducts = () => {
	return (dispatch) => {
/* 		dispatch(toggleIsLoadingAC(false)); */

		productsAPI.getProducts().then((data) => {
			dispatch(setProductsAC(data));
/* 			dispatch(toggleIsLoadingAC(true)); */
		});
	};
};


export default productReducer;
