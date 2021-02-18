import * as axios from 'axios';

const istance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:3000/',
});

export const productsAPI = {
	getProducts() {
		return istance.get(`products`).then((response) => {
			return response;
		});
	},
	async setPricePizza(productId, smallPizza) {
		const productsResponse = await productsAPI.getProducts();
		const result = await istance.post(`products`, {
			...productsResponse.data,
			pizza: productsResponse.data.pizza.map((el) =>
				el.id === productId
					? {
							...el,
							finalPrice: smallPizza ? el.priceSizeSmall : el.priceSizeMiddle,
					  }
					: el
			),
		});
		return result.data.pizza;
	},
};

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
	async updateBasket(elem, amount, sum) {
		const basketResponse = await basketAPI.getBasket();
		return await istance.post(`basket`, {
			...basketResponse,
			selectedElem: [...basketResponse.selectedElem, elem],
			amountElem: amount,
			sum: sum,
		});
	},
	async deleteProduct(id) {
		const basketResponse = await basketAPI.getBasket();
		const result = await istance.post(`basket`, {
			...basketResponse,
			selectedElem: [
				...basketResponse.selectedElem.filter((elem) => elem.id !== id),
			],
			amountElem: basketResponse.amountElem - 1,
			sum:
				basketResponse.sum -
				[...basketResponse.selectedElem].find((elem) => elem.id === id).price,
		});
		return [result.data.selectedElem, result.data.amountElem, result.data.sum];
	},
};
