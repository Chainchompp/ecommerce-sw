<template>
   <q-card class="my-card q-mx-md q-my-sm col-md-2 col-xs-12 col-sm-5">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom text-subtitle2 text-center">Producto</div>
          </q-img>
          <q-card-section class="row items-center justify-around">
            <q-input
              class="col-md-6 col-xs-3"
              outlined
              dense
              v-model="productQuantity"
              type="number"
              min="1"
            />
            <div class="col-md-6 col-xs-3 text-center">S/.5.20</div>
            <q-btn class="col-md-12 col-xs-5 q-mt-xs" size="sm">Agregar</q-btn>
          </q-card-section>
   </q-card>
</template>

<script>
export default {
    name: "ProductCard",
    data() {
      return {
        productQuantity: 1
      }
    }
};
</script>

<style scoped lang="sass">

</style>