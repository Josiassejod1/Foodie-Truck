import { observable, action, computed } from 'mobx';

class UserStore {
    @observable user = null;

    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @action setUser = (user) => {
        if (!this.user) {
            this.user = {};
        }

        this.user = user;
    }
}

export default UserStore;