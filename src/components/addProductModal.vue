<template>
  <q-dialog :model-value="showModal" persistent>
    <q-card style="min-width: 350px; width: 60%; max-width: 600px">
      <q-card-section horizontal>
        <div class="col-10 q-my-md">
          <div class="text-center text-h4 q-my-sm">Chips Ahoy</div>
          <div class="text-center text-subtitle2 q-my-sm">
           {{addMessage}}
          </div>
          <div v-if="addType != true" class="row justify-center">
            <q-btn dense class="q-px-lg" color="dark" label="Cerrar" @click="closeModal()" />
          </div>
          <div v-if="addType == true" class="row justify-around">
            <q-btn dense class="q-px-lg" color="dark" label="Seguir Comprando" @click="closeModal()" />
            <q-btn dense class="q-px-lg" color="dark" label="Ir al carrito" @click="closeModal()" to="/cart" />
          </div>
        </div>
        <div class="col-1 row items-center  ">
            <q-icon v-if="addType != true" name="warning" size="xl" />
            <q-icon v-if="addType == true" name="mdi-check-decagram" size="xl" />
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  name: "addProductModal",
  props: ["showModal","addType"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
  },
  computed:{
    addMessage(){
        if(this.addType == true){
            return "Se ha agregado exitosamente al carrito"
        }
        return " Stock agotado, prueba revisando en otras sedes"
    }
  }
};
</script>

<style>
</style>