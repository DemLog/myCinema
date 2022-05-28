import {makeAutoObservable} from "mobx";

class StoreView {
    activeView = {
        auth: "login",
        app: "auth",
        main: "main",
        films: "list",
        hells: "list"
    };

    constructor() {
        makeAutoObservable(this);
    }

    changeView(view, name) {
        this.activeView[view] = name;
    };
};

const storeView = new StoreView();

export default storeView;
export { StoreView };