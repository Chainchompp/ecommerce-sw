import { defineStore } from "pinia";
import axios from "axios"


export const useUserStore = defineStore("userStore", {
    state: () => ({
        user: null,
        sessionStorage: null
    }),

    getters: {
        userExists: state => {
            return !!state.user
        }
    },

    actions: {
        async login(email, password) {


            const { data: { data } } = await axios.post('http://localhost:5000/ecommerceApi/auth/login',
                {
                    email: email,
                    password: password
                }).catch(error => {
                    throw error
                })
            this.sessionStorage = data.sessionStorage
            this.user = data.client
            localStorage.setItem('token', data.token)
            localStorage.setItem('expiresIn', data.expiresIn)

        },
        async register(clientInformation) {

            await axios.post('http://localhost:5000/ecommerceApi/auth/register',
                {
                    ...clientInformation
                }).catch(error => {
                    console.log('error register')
                    throw error
                })
            

        },
        logout(){
            this.sessionStorage = null
            this.user = null
            localStorage.removeItem('token')
            localStorage.removeItem('expiresIn')
        }
    }
})
