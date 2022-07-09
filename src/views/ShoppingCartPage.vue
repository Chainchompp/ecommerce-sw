<template>
  <q-page>
    <div class="q-mt-lg text-center text-h4">Carrito de compras</div>
    <div class="row q-mx-md justify-around">
      <div class="col-md-7 col-xs-12 col-sm-12 q-my-lg">
         <q-card v-for="(product,index) in this.products" :key="`product-cart-${product.product._id}`" flat bordered class="my-card q-my-sm">
          <q-card-section horizontal>
            <q-img :ratio="1"
              class="col-md-3 col-xs-2"
              :src="product.product.caption"
            />
            <q-card-section class="col-md-3 row justify-center items-center">
              <div class="text-center text-subtitle1 q-my-sm">{{product.product.title}}</div>
              <div class="row justify-center">
                <q-btn  size="sm" label="Ver producto" />
              </div>
            </q-card-section>
            <q-card-section class="row justify-center items-center q-px-xs col-md-6 col-xs-7 text-center">
              <div class="col-3">
                <p>P. Unit.</p>
                <p>{{productPrice(index)}}</p>
              </div>
              <div class="col-5">
                <p>Cantidad</p>
                <div class="row justify-around items-center">
                  <q-btn dense size="sm" icon="mdi-minus" />
                  <div>{{product.quantity}}</div>
                  <q-btn dense size="sm" icon="mdi-plus" />
                </div>
              </div>
              <div class="col-4">
                <p>Subtotal</p>
                <p>{{roundTwoDecimal( productPrice(index)*product.quantity)}}</p>
              </div>
            </q-card-section>
          </q-card-section>
          <q-btn  @click="removeProduct(product.product)" style="position: absolute; top:10px ; right: 10px" size="md" icon="mdi-trash-can-outline" color="red" round />
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12 col-sm-12 q-my-lg">
        <q-card flat bordered class="my-card q-pa-md text-subtitle1">
          <q-card-section>
            <div class="row justify-between text-weight-bold">
              <p>Subtotal:</p>
              <p>{{totalPrice()}}</p>
            </div>
            <div class="row justify-between">
              <p>Envío:</p>
              <p>Por calcular</p>
            </div>
            <q-separator />
            <div class="row justify-between text-weight-bold q-mt-md">
              <p>Total:</p>
              <p>{{totalPrice()}}</p>
            </div>
            <div class="row justify-center">
              <q-btn
                style="width: 90%"
                class="q-py-md"
                color="primary"
                to="/buy"
                icon="mdi-lock"
                dense
                label="Checkout"
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import {useCartStore} from "../store/modules/cartStore"
import {mapActions, mapState} from "pinia"

export default {
  name: "ShoppingCartPage",
  data() {
    return {};
  },
  methods: {
    productPrice(index){
      let price = 0;
      if (this.products != []) {
        this.products[index].product.prices.forEach((element) => {
          if (element.quantity <= this.products[index].quantity) {
            price = element.price;
          }
        });
      }
      return price;
    },  
    roundTwoDecimal(number){
      return Math.round(number*100)/100
    },
    totalPrice(){
      let total = 0

      this.products.forEach((product,i) => {
        total = total + this.roundTwoDecimal( this.productPrice(i)* product.quantity)
      })
      
    return total
    },
    ...mapActions(useCartStore,["removeProduct"])
  },
  computed: {
    ...mapState(useCartStore,["products"])
  },
};
</script>

<style scoped>
</style>
