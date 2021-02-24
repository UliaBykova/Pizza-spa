import { Dispatch } from 'redux';
import { basketAPI } from '../../api/api';
import { TBasket, TElem } from '../../types/types';
import { AppStateType } from './redux-store';

const SET_SELECTED_ELEM = 'SET_SELECTED_ELEM';
const DELETE_PRODUCT_TO_BASKET = 'DELETE_PRODUCT_TO_BASKET';

type InitialStateType = typeof initialState;

let initialState = {
	selectedElem: [] as Array<TElem>,
	amountElem: 0,
	sum: 0,
};

const basketReducer = (
	state = initialState,
	action: ActionTypes
): InitialStateType => {
	switch (action.type) {
		case SET_SELECTED_ELEM: {
			return {
				...state,
				selectedElem: action.selectedElem,
				amountElem: action.amountElem,
				sum: action.sum,
			};
		}
		case DELETE_PRODUCT_TO_BASKET: {
			return {
				...state,
				selectedElem: action.selectedElem,
				amountElem: action.amountElem,
				sum: action.sum,
			};
		}
		default:
			return state;
	}
};

export const setSelectedElemAC = (
	selectedElem: Array<TElem>,
	amountElem: number,
	sum: number
): SetSelectedElemACType => ({
	type: SET_SELECTED_ELEM,
	selectedElem,
	amountElem,
	sum,
});

export const deleteProductToBasketAC = (
	selectedElem: Array<TElem>,
	amountElem: number,
	sum: number
): DeleteProductToBasketACType => ({
	type: DELETE_PRODUCT_TO_BASKET,
	selectedElem,
	amountElem,
	sum,
});

type GetStateType = () => AppStateType;
type DispatchType = Dispatch<ActionTypes>;

export const requestSelectedElem = () => {
	return (dispatch: DispatchType, getState: GetStateType) => {
		basketAPI.getBasket().then((response: TBasket) => {
			dispatch(
				setSelectedElemAC(response.selectedElem, response.amountElem, response.sum)
			);
		});
	};
};

export const updateBasket = (
	selectedElem: Array<TElem>,
	elem: TElem,
	weightPizza: boolean
) => {
	return (dispatch: DispatchType, getState: GetStateType) => {
		const repeatElem = selectedElem.find((product) => product.id === elem.id);
			basketAPI.updateBasket(elem, weightPizza).then((response) => {
				dispatch(
					setSelectedElemAC(
						response.data.selectedElem,
						response.data.amountElem,
						response.data.sum
					)
				);
			});
	};
};

/* export const updateBasket = (
	selectedElem: Array<TElem>,
	elem: TElem,
	weightPizza: boolean
) => {
	return (dispatch: DispatchType, getState: GetStateType) => {
		const repeatElem = selectedElem.find((product) => product.id === elem.id);
		if (repeatElem) {
			basketAPI.checkBasket(repeatElem).then((response) => {
				dispatch(
					setSelectedElemAC(
						response.data.selectedElem,
						response.data.amountElem,
						response.data.sum
					)
				);
			});
		} else {
			basketAPI.updateBasket(elem, weightPizza).then((response) => {
				dispatch(
					setSelectedElemAC(
						response.data.selectedElem,
						response.data.amountElem,
						response.data.sum
					)
				);
			});
		}
	};
}; */

export const deleteProductTC = (elem: TElem) => {
	return (dispatch: DispatchType, getState: GetStateType) => {
		basketAPI
			.deleteProduct(elem)
			.then((response: Array<Array<TElem> & number>) => {
				dispatch(deleteProductToBasketAC(response[0], response[1], response[2]));
			});
	};
};

export default basketReducer;

type ActionTypes = SetSelectedElemACType | DeleteProductToBasketACType;

type SetSelectedElemACType = {
	type: typeof SET_SELECTED_ELEM;
	selectedElem: Array<TElem>;
	amountElem: number;
	sum: number;
};

type DeleteProductToBasketACType = {
	type: typeof DELETE_PRODUCT_TO_BASKET;
	selectedElem: Array<TElem>;
	amountElem: number;
	sum: number;
};
