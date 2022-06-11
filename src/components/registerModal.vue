<template>
  <q-dialog :model-value="showModal" persistent>
    <q-card style="min-width: 450px; width: 70%; max-width: 700px">
      <div class="row justify-end q-mt-md q-mr-md">
        <q-btn round color="grey-8" icon="close" ripple @click="closeModal()" />
      </div>
      <q-card-section>
        <div class="text-h4 text-center q-my-md">Registrarse</div>
        <div class="row justify-around">
          <div class="col-5">
            <q-input class="q-my-md" label="Correo" outlined dense />
            <q-input class="q-my-md" label="Ap. Paterno" outlined dense />
            <q-input class="q-my-md" label="Celular" outlined dense />
            <q-select
              class="q-my-md"
              v-model="docType"
              :options="options"
              outlined
              dense
              label="Tipo documento"
            />

            <q-input class="q-my-md" label="Contraseña" outlined dense />
          </div>
          <div class="col-5">
            <q-input class="q-my-md" label="Nombre" outlined dense />
            <q-input class="q-my-md" label="Ap. Materno" outlined dense />
            <q-input class="q-my-md invisible" disable outlined dense />
            <q-input class="q-my-md" label="Número documento" outlined dense />
            <q-input
              class="q-my-md"
              label="Repetir contraseña"
              outlined
              dense
            />
          </div>
        </div>
      </q-card-section>
      <q-card-actions align="around" class="text-primary">
        <q-btn label="Registrarse"/>
      </q-card-actions>
      <q-card-section>
        <div class="text-center">Ya tienes cuenta? Click aquí</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  data() {
    return {
      docType: null,
      options: ["DNI", "Pasaporte", "RUC"],
    };
  },
  props:['showModal'],
  methods:{
    closeModal() {
      this.$emit("closeModal");
    },
  }

};
</script>

<style>
</style>