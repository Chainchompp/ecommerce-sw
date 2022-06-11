import { defineStore } from "pinia";


export const useShopStore = defineStore("shopStore", {
    state: () => ({
       choosenShop: null
    }),

    getters: {
        alreadyChoose: state => {
            return !!state.choosenShop
        }
    },
    

    actions: {
        chooseShop(shop){
            this.choosenShop = shop
        }
    }
})
