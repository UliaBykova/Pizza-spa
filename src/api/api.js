import axios from 'axios';

const istance = axios.create({
	withCredentials: true,
	baseURL: 'http://localhost:3000/',
});

export const productsAPI = {
	getProducts() {
		return istance.get(`products`).then((data) => {
			return data;
		});
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
	async updateBasket(product, weightPizza) {
		const basketResponse = await basketAPI.getBasket();
		return await istance.post(`basket`, {
			...basketResponse,
			selectedElem:  [...basketResponse.selectedElem].find((elem) => elem.id === product.id) ?
			[
				...[...basketResponse.selectedElem].filter(
					(elem) => elem.id !== product.id
				),
				{
					...product,
					countProduct: (product.countProduct ? product.countProduct : 1) + 1,
				},
			]
			:
			 [
				...basketResponse.selectedElem,
				{
					...product,
					countProduct: 1,
					weightPizza: weightPizza ? 'Традиционное' : 'Тонкое',
				},
			],
			amountElem: [...basketResponse.selectedElem].reduce(
				(sum, elem) => sum + elem.countProduct,
				1
			),
			sum: basketResponse.sum + product.price,
		});
	},
	async checkBasket(repeatElem) {
		const basketResponse = await basketAPI.getBasket();
		return await istance.post(`basket`, {
			...basketResponse,
			selectedElem: [
				...[...basketResponse.selectedElem].filter(
					(elem) => elem.id !== repeatElem.id
				),
				{
					...repeatElem,
					countProduct: (repeatElem.countProduct ? repeatElem.countProduct : 1) + 1,
				},
			],
			amountElem: [...basketResponse.selectedElem].reduce(
				(sum, elem) => sum + elem.countProduct,
				1
			),
			sum: basketResponse.sum + repeatElem.price,
		});
	},

	async deleteProduct(product) {
		const basketResponse = await basketAPI.getBasket();
		const result = await istance.post(`basket`, {
			...basketResponse,
			selectedElem:
				product.countProduct > 1
					? [...basketResponse.selectedElem].map((p) => {
							if (p.id === product.id) {
								return { ...p, countProduct: p.countProduct - 1 };
							}
							return p;
					  })
					: [
							...basketResponse.selectedElem.filter((elem) => elem.id !== product.id),
					  ],
			amountElem: basketResponse.amountElem - 1,
			sum:
				basketResponse.sum -
				[...basketResponse.selectedElem].find((elem) => elem.id === product.id)
					.price,
		});
		return [result.data.selectedElem, result.data.amountElem, result.data.sum];
	},
};
