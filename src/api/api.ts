import { ElemType } from './../types/types';
import axios, {AxiosResponse, AxiosRequestConfig} from 'axios';

const istance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:3000/',
});

export type ProductsAPIType = {
    data : { [key:string]: Array<ElemType>}
	config? : AxiosRequestConfig
	headers? : any
	request? : any
	url? : string
	status : number
	statusText? : string
}
/* get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R>; */
export const productsAPI = {
	getProducts() :Promise<AxiosResponse<ProductsAPIType>> {
		return istance.get(`products`).then((data) => {
			return data;
		});
	},
};

/* productsAPI.getProducts().then((Response) => Response.data.data. ) */

export const promoAPI = {
	getPromo() {
		return istance.get(`promo`).then((response) => {
			return response;
		});
	},
};

export const basketAPI = {
	getBasket() {
		return istance.get(`basket`).then((response) => {
			return response.data;
		});
	},
	async updateBasket(elem : ElemType, amount : number, sum : number, weightPizza : boolean) {
		const basketResponse = await basketAPI.getBasket();
		return await istance.post(`basket`, {
			...basketResponse,
			selectedElem: [...basketResponse.selectedElem, {...elem , amount: 1, weightPizza : weightPizza ? 'Традиционное' : 'Тонкое' }],
			amountElem: amount,
			sum: sum
		});
	},
	async deleteProduct(id : number) {
		const basketResponse = await basketAPI.getBasket();
		const result = await istance.post(`basket`, {
			...basketResponse,
			selectedElem: [
				...basketResponse.selectedElem.filter((elem : ElemType ) => elem.id !== id),
			],
			amountElem: basketResponse.amountElem - 1,
			sum:
				basketResponse.sum -
				[...basketResponse.selectedElem].find((elem) => elem.id === id).price,
		});
		return [result.data.selectedElem, result.data.amountElem, result.data.sum];
	},
};
