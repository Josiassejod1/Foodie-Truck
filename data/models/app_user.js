import { Model } from "./base";

export class AppUser extends Model {
    get defaults() {
        return {
            firstName: "",
            lastName: "",
            isRestaurant?: "",
            address: [],
            phone: "",
            role: "customer"
        }
    }
}