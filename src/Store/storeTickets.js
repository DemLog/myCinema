import {makeAutoObservable} from "mobx";
import axios from "axios";

class StoreTickets {
    listTickets = [];

    constructor() {
        makeAutoObservable(this);
    }

    async autoGetTickets() {
        axios.get(`https://cinema.demlovesky.ru/api/v1/sells.getListPurchases`).then(res => {
            this.listTickets = res.data;
        })
    }

    async getPlace(id) {
        let response = ''
        await axios.get(`https://cinema.demlovesky.ru/api/v1/films.getFilm?id=${id}`).then(res => {
            response = res.data;
        })
        return response
    }

};

const storeTickets = new StoreTickets();

export default storeTickets;
export {StoreTickets};