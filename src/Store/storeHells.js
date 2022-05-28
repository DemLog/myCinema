import {makeAutoObservable} from "mobx";
import axios from "axios";

class StoreHells {
    listHalls = [];

    constructor() {
        makeAutoObservable(this);
    }

    async autoGetHalls() {
        axios.get(`https://cinema.demlovesky.ru/api/v1/places.getListHells`).then(res => {
            this.listHalls = res.data;
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

const storeHalls = new StoreHells();

export default storeHalls;
export {StoreHells};