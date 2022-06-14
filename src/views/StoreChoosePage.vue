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
            <q-card @click="selectShop('Mercado 1')" class="my-card">
              <q-img src="https://pr1.nicelocal.pe/3c1BpxTajhWn6fXu5Vps6g/1500x1126,q75/4px-BW84_n0QJGVPszge3NRBsKw-2VcOifrJIjPYFYkOtaCZxxXQ2XW5vuVqJ8ns98aDdoHZ6eVRumMoozinsY8EX3DN0w0M4mXxbYJm-0YV5SNZ9I24jA">
                <div class="absolute-bottom text-subtitle2 text-center">
                  San Martín de Porres
                </div>
              </q-img>
            </q-card>
            <q-card @click="selectShop('Mercado 2')" class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Los Olivos
                </div>
              </q-img>
            </q-card>
            <q-card @click="selectShop('Mercado 3')" class="my-card">
              <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
                <div class="absolute-bottom text-subtitle2 text-center">
                  Mercado 3
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

export default {
  name: "StoreChoosePage",
  data() {
    return {};
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
};
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>
