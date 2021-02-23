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
	async updateBasket(elem, weightPizza) {
		const basketResponse = await basketAPI.getBasket();
		return await istance.post(`basket`, {
			...basketResponse,
			selectedElem: [...basketResponse.selectedElem, {...elem, countProduct: 1, weightPizza : weightPizza ? 'Традиционное' : 'Тонкое' }],
			amountElem: [...basketResponse.selectedElem].reduce((sum, elem) => sum + elem.countProduct, 1),
			sum: basketResponse.sum + elem.price
		});
	},
	async checkBasket(repeatElem) {
       const basketResponse = await basketAPI.getBasket();
	   return await istance.post(`basket`, {
		   ...basketResponse, 
		   selectedElem : [...[...basketResponse.selectedElem].filter((elem) => elem.id !== repeatElem.id), {...repeatElem, countProduct : (repeatElem.countProduct ? repeatElem.countProduct : 1 ) + 1 }],
		   amountElem: [...basketResponse.selectedElem].reduce((sum, elem) => sum + elem.countProduct, 1),
		   sum: basketResponse.sum + repeatElem.price
	   })
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
