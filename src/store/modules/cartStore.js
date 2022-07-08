import { defineStore } from "pinia";


export const useCartStore = defineStore("cartStore", {
    state: () => ({
        cartState: "Inactive",
        expiration: null,
        client_id: null,
        products: [],
        cartId: null,
    }),

    getters: {
    },


    actions: {
        async loadCart(shop) {

        },
        addProduct(product, quantity) {
            const index = this.products.findIndex(e => product._id == e._id)
            if (index != -1) {
                this.products.push({
                    product: product,
                    quantity: quantity
                })
            } else {
                if (this.products.length == 0) {
                    this.products.push({
                        product: product,
                        quantity: quantity
                    })
                } else {
                    this.products[index].quantity += quantity
                }
            }
        },
        removeProduct(product) {
            const index = this.products.findIndex(e => product._id == e._id)
            if (index == -1) {
                this.products.splice(index, 1)
            } else {
                console.log('No se puede remover xd')
            }
        },
        async saveCart() {

        }
    }
})


