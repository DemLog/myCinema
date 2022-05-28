import {makeAutoObservable} from "mobx";
import axios from "axios";

class StoreFilms {
    listFilms = [];

    constructor() {
        makeAutoObservable(this);
    }

    async autoGetFilms() {
        axios.get(`https://cinema.demlovesky.ru/api/v1/films.getListFilms`).then(res => {
            this.listFilms = res.data;
        })
        this.sysState = true;
    }

    async getFilm(id) {
        let response = ''
        await axios.get(`https://cinema.demlovesky.ru/api/v1/films.getFilm?id=${id}`).then(res => {
            response = res.data;
        })
        return response
    }

    handleChangeTab = (e, value) => {
        this.sysTab = value;
    };


};

const storeFilms = new StoreFilms();

export default storeFilms;
export {StoreFilms};