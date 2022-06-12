<template>
  <q-stepper header-nav v-model="step" vertical color="teal" done-color="teal"
      active-color="teal"
      inactive-color="grey-8" animated>
    <q-step

      :name="1"
      title="Datos personales"
      icon="mdi-account"
      :done="step > 1"
    >
      <div class="row justify-around">
        <q-input
          dense
          outlined
          label="Nombres"
          name="nombres"
          class="col-sm-5 col-xs-12 q-my-sm"
        ></q-input>
        <q-input
          dense
          outlined
          label="Número"
          name="numero"
          class="col-sm-5 col-xs-12 q-my-sm"
        ></q-input>
        <q-input
          dense
          outlined
          label="Ap. Paterno"
          name="paterno"
          class="col-sm-5 col-xs-12 q-my-sm"
        ></q-input>
        <q-input
          dense
          outlined
          label="Ap. Materno"
          name="materno"
          class="col-sm-5 col-md- col-xs-12 q-my-sm"
        ></q-input>
      </div>

      <q-option-group
        v-model="acceptTerms"
        :options="terms"
        color="green"
        type="checkbox"
      />

      <q-stepper-navigation>
        <q-btn @click="step = 2" color="teal" label="Confirmar" />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="2"
      title="Tipo de entrega"
      icon="mdi-box"
      :done="step > 2"
    >
      <div>
        <q-option-group :options="options" type="radio" v-model="group" />
      </div>
      <div class="row justify-between">
        <q-input
          dense
          outlined
          label="Distrito"
          name="distrito"
          class="col-xs-12 col-sm-3 q-my-xs"
        ></q-input>
        <q-input
          dense
          outlined
          label="Dirección"
          name="direccion"
          class="col-xs-12 col-sm-8 q-my-xs"
        ></q-input>

        <q-input
          dense
          outlined
          label="Referencia"
          name="referencia"
          class="col-xs-12 col-sm-5 q-my-xs"
        ></q-input>
        <q-input
          dense
          outlined
          label="Piso/Dpto"
          name="piso"
          class="col-xs-12 col-sm-3 q-my-xs"
        ></q-input>
        <q-input
          dense
          outlined
          label="Nro"
          name="numero"
          class="col-xs-12 col-sm-3 q-my-xs"
        ></q-input>
      </div>
      <div class="row justify-end">
        <q-btn
          color="teal"
          icon="mdi-map-marker"
          label="USAR DIRECCION ACTUAL"
        ></q-btn>
      </div>
      <q-stepper-navigation>
        <q-btn @click="step = 3" color="teal" label="Ir a método de pago" />
        <q-btn
          flat
          @click="step = 1"
          color="teal"
          label="Regresar"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :name="3"
      title="Método de pago"
      icon="mdi-credit-card"
    >
      An ad group contains one or more ads which target a shared set of
      keywords.

      <q-stepper-navigation>
        <q-btn  color="teal" label="Realizar pago" />
        <q-btn
          flat
          @click="step = 2"
          color="teal"
          label="Regresar"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>
  </q-stepper>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      acceptTerms: "",
      terms: [
        {
          label: "Acepto el uso de datos personales para otros usos",
          value: "op1",
        },
        {
          label: "Acepto términos y condiciones",
          value: "op2",
        },
      ],
      color1: false,
      color2: true,
      group: null,

      options: [
        { label: "Despacho en domicilio", value: "despacho", color: "green" },
        { label: "Retiro en tienda", value: "retiro", color: "green" },
      ],
    };
  },
  name: "paymentStepper",
};
</script>

<style>
</style>