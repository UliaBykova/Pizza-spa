import { productsAPI } from '../../api/api';

const SET_PRODUCTS = 'SET_PRODUCTS';
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING';
const SET_SIZE_PIZZA = 'SET_SIZE_PIZZA';

let initialState = {
	products: [],
	loading: false,
	test: [],
};

const productReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_PRODUCTS: {
			return { ...state, products: action.products };
		}
		case TOGGLE_IS_LOADING: {
			return { ...state, loading: action.loading };
		}
		case SET_SIZE_PIZZA: {
/* 			debugger; */
			const pizzaState = state.products.data;
			console.log(pizzaState);
			return {
				...pizzaState,
				products: {
					data: {
						...state.products.data,
						pizza: action.arrPizza,
					},
				},
			};
		}
		default:
			return state;
	}
};

export const setProductsAC = (products) => ({ type: SET_PRODUCTS, products });
export const toggleIsLoadingAC = (loading) => ({
	type: TOGGLE_IS_LOADING,
	loading,
});
export const setSizePizzaAC = (arrPizza) => ({
	type: SET_SIZE_PIZZA,
	arrPizza,
});

export const requestProducts = () => {
	return (dispatch) => {
		dispatch(toggleIsLoadingAC(false));

		productsAPI.getProducts().then((data) => {
			dispatch(setProductsAC(data));
			dispatch(toggleIsLoadingAC(true));
		});
	};
};

export const setSizePizza = (productId, smallPizza) => {
	return (dispatch) => {
		productsAPI.setPricePizza(productId, smallPizza).then((data) => {
			dispatch(setSizePizzaAC(data));
		});
	};
};

export default productReducer;
