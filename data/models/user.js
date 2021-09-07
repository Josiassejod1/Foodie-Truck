
import React from 'react';
import { makeObservable, observable } from 'mobx';

export default class User {
    name = null;
    email = null;
    phoneNumber = null;
    isBusiness = false;
    favorites =  []
    cards = []
    currentLocation = null
    constructor() {
        makeObservable(
            this, {
                name: observable,
                email: observable,
                phoneNumber: observable,
                isBusiness: observable,
                favorites: observable,
                cards: observable,
                currentLocation: observable
            }
        );
    }
}

const appUserStore  = new AppUserStore();
export const appUserContext = React.createContext(appUserStore);
export const useAppUserContext = () => React.useContext(appUserContext)
