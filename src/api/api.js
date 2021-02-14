import * as axios from 'axios';

const istance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'
});

export const productsAPI = {
    getProducts() {
        return istance.get(`products`)
        .then(response => {
             return response
        })
    }
}

export const promoAPI = {
    getPromo() {
        return istance.get(`promo`)
        .then(response => {
             return response
        })
    }
}

export const basketAPI = {
    getBasket() {
        return istance.get(`basket`)
        .then(response => {
            return response
        })
    }
}