import * as axios from 'axios';

const istance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/'
});

export const productsAPI = {
    getProducts() {
        return istance.get(`http://localhost:3000/products`)
        .then(response => {
             return response
        })
    }
}

export const promoAPI = {
    getPromo() {
        return istance.get(`http://localhost:3000/promo`)
        .then(response => {
             return response
        })
    }
}

