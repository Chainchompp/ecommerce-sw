<template>
  <q-layout>
    <q-page-container>
      <q-page class="bg-primary">
        <div class="q-py-xl" style="height: 100%">
          <div class="flex justify-center desktop-only mobile-hide">
            <img
              src="../assets/logo.png"
              style="width: 40vw; max-width: 800px"
            />
          </div>
          <p class="text-h4 q-mt-xl text-center text-white">
            Selecciona una de nuestras sedes para continuar:
          </p>
          <div
            class="q-pa-md q-my-xl items-center justify-around row q-gutter-md"
          >
          <q-card v-for="shop in shops" :key="`shop-card-${shop._id}`" @click="selectShop(shop._id)" class="my-card">
              <q-img  :ratio="1" :src="shop.caption">
                <div class="absolute-bottom text-subtitle2 text-center">
                  {{shop.name}}
                </div>
              </q-img>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapActions } from "pinia";
import { useShopStore } from "../store/modules/shopStore";
import axios from 'axios'

export default {
  name: "StoreChoosePage",
  data() {
    return {
      shops : null
    };
  },
  methods: {
    selectShop(shop) {
      this.chooseShop(shop);
      console.log(shop);
      this.$router.push("/home");
    },
    ...mapActions(useShopStore, ["chooseShop"]),
  },
  computed: {},
  async beforeMount(){
    const {data: {data}} = await axios.get('http://localhost:5000/ecommerceApi/product/shops')
    this.shops = data
  }
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
