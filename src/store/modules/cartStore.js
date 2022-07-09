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
            const index = this.products.findIndex(e => {
                console.log(product._id == e.product._id)
                return product._id == e.product._id
            })
            if (index == -1) {
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
                    console.log(index)
                    console.log(this.products[index])
                    this.products[index].quantity += quantity
                }
            }
        },
        removeProduct(product) {
            const index = this.products.findIndex(e => {
                console.log(product._id,e.product._id)
                return product._id == e.product._id
            })
            if (index != -1) {
                this.products.splice(index, 1)
            } else {
                console.log('No se puede remover xd')
            }
        },
        async saveCart() {

        }
    }
})


