import { observable, action } from "mobx";

class SessionStore {
    @observable authUser = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action setAuthUser = (user) => {
        this.authUser = user;
    }
}

export default SessionStore;