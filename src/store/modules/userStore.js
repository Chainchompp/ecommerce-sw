import { defineStore } from "pinia";


export const useUserStore = defineStore("userStore", {
    state: () => ({
       user: null
    }),

    getters: {
        userExists: state => {
            return !!state.user
        }
    },
    

    actions: {
        login(email,password){
            this.user = {
                email: email,
                password: password
            }
        }
    }
})
