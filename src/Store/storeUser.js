import {makeAutoObservable} from "mobx";

class StoreUser {
    vkUser = null;
    myUser = null;

    userInfo = null;

    constructor() {
        makeAutoObservable(this);
    }

    addVKUser(userData) {
      this.vkUser = userData;
      console.log(userData)
    };

    addMyUser(userData) {
        this.myUser = userData;
    };

    async getUserInfo(vkID = 0) {
        const userInfo = await storeUser.myUser.method('auth.getUser', null, {vk_id: vkID}, 'GET', 'v1');
        console.log(userInfo)
        this.userInfo = userInfo.data;
    }

};

const storeUser = new StoreUser();

export default storeUser;
export { StoreUser };