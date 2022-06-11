<template>
  <q-dialog :model-value="showModal" persistent>
    <q-card style="min-width: 350px; width: 60%; max-width: 600px">
      <div class="row justify-end q-mt-md q-mr-md">
        <q-btn round color="grey-8" icon="close" ripple @click="closeModal()" />
      </div>
      <q-card-section >
        <div class="text-center text-h4 q-my-sm">Sede: Los Olivos</div>
          <div class="text-center text-h5 q-my-sm">600 unidades</div>
      </q-card-section>
      <q-card-section class="q-mx-md" >
        <div class=" text-h6 q-my-sm">Otras sedes</div>
          <div class="row text-subtitle2 q-my-sm justify-around">
            <div class="col-6">San Martin: 2500 unidades</div>
            <div class="col-6">Carabayllo: 1500 unidades</div>
            <div class="col-12">Sta Anita: 2000 unidades</div>
          </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    name: "productStockModal",
    props: ["showModal"],
    methods:{
        closeModal(){
            this.$emit('closeModal')
        }
    }
};
</script>

<style>
</style>