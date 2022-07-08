<template>
  <q-dialog :model-value="showModal" persistent>
    <q-card style="min-width: 350px; width: 60%; max-width: 600px">
      <div class="row justify-end q-mt-md q-mr-md">
        <q-btn round color="grey-8" icon="close" ripple @click="closeModal()" />
      </div>
      <q-card-section>
        <div class="text-center text-h4 q-my-sm">{{ `${selectedStoreStock.shop.name} ${selectedStoreStock.quantity} unidades` }}</div>
      </q-card-section>
      <q-card-section class="q-mx-md">
        <div class="text-h6 q-my-sm">Otras sedes</div>
        <div class="row text-subtitle2 q-my-sm justify-around">
          <div
            v-for="stock in othersStoreStock"
            :key="`stock-${stock['_id']}`"
            class="col-6"
          >
            {{ `${stock.shop.name} ${stock.quantity} unidades` }}
          </div>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import axios from "axios";
import { mapState } from "pinia";
import { useShopStore } from "../store/modules/shopStore";
export default {
  data() {
    return {
      stocksArray: [],
    };
  },
  name: "productStockModal",
  props: ["showModal", "productId"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  async beforeMount() {
    if (!!this.productId) {
      const params = new URLSearchParams([["productId", this.productId]]);
      const {
        data: { data },
      } = await axios.get("http://localhost:5000/ecommerceApi/product/stocks", {
        params,
      });
      this.stocksArray = data;
    }
  },
  computed: {
    selectedStoreStock() {
      if (this.stocksArray.length != 0) {
        return this.stocksArray.find((e) => e["shop_id"] == this.choosenShop);
      }
    },
    othersStoreStock() {
      if (this.stocksArray.length != 0) {
        const arrayId = this.stocksArray.findIndex(
          (e) => e["shop_id"] == this.choosenShop
        );
        return [
          ...this.stocksArray.slice(0, arrayId),
          ...this.stocksArray.slice(arrayId + 1, this.stocksArray.length),
        ];
      }
    },
    ...mapState(useShopStore, ["choosenShop"]),
  },
};
</script>

<style>
</style>