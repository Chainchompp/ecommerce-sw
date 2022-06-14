<template>
  <q-stepper
    header-nav
    v-model="step"
    vertical
    color="primary"
    done-color="primary"
    active-color="primary"
    inactive-color="grey-8"
    animated
    active-icon="mdi-arrow-right-thin-circle-outline"
  >
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
      <div>
        <q-option-group
          v-model="acceptTerms"
          :options="terms"
          color="secondary"
          type="checkbox"
          name="acceptTerms"
        />
      </div>

      <q-stepper-navigation>
        <q-btn @click="step = 2" color="primary" label="Confirmar" />
      </q-stepper-navigation>
    </q-step>

    <q-step :name="2" title="Tipo de entrega" icon="mdi-box" :done="step > 2">
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
          color="primary"
          icon="mdi-map-marker"
          label="USAR DIRECCION ACTUAL"
        ></q-btn>
      </div>
      <q-stepper-navigation>
        <q-btn
          @click="confirmShip()"
          color="primary"
          label="Ir a método de pago"
        />
        <q-btn
          flat
          @click="step = 1"
          color="primary"
          label="Regresar"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>

    <q-step
      :disable="step < 2"
      :name="3"
      title="Método de pago"
      icon="mdi-credit-card"
    >
      <div class="text-h6">Tipo de comprobante</div>

      <q-option-group
        :options="paymentOptions"
        type="radio"
        v-model="paymentOption"
        inline
      />
      <div class="row">
        <q-input
          dense
          outlined
          label="RUC"
          name="ruc"
          class="col-xs-12 col-sm-4 q-my-xs"
        ></q-input>
      </div>
      <q-separator class="q-my-sm"/>
      <div class="row justify-around">
        <q-card v-ripple rip class="my-card col-xs-5 col-sm-2 q-my-sm">
          <q-img
            :ratio="1"
            src="https://farmaciaproderma.com/wp-content/uploads/2018/08/visa-mastercard-logo.jpg"
          >
            <div class="absolute-top text-h4 text-center">Tarjeta</div>
          </q-img>
        </q-card>
        <q-card v-ripple rip class="my-card col-xs-5 col-sm-2 q-my-sm">
          <q-img
            :ratio="1"
            src="https://s3.cointelegraph.com/storage/uploads/view/3278bdc14c74dd4e85732b776d0e5b1d.png"
          >
            <div class="absolute-top text-h4 text-center">Paypal</div>
          </q-img>
        </q-card>
        <q-card v-ripple rip class="my-card col-xs-5 col-sm-2 q-my-sm">
          <q-img
            :ratio="1"
            src="https://play-lh.googleusercontent.com/y5S3ZIz-ohg3FirlISnk3ca2yQ6cd825OpA0YK9qklc5W8MLSe0NEIEqoV-pZDvO0A8"
          >
            <div class="absolute-top text-h4 text-center">Yape</div>
          </q-img>
        </q-card>
        <q-card
          v-ripple
          class="my-card q-my-sm col-xs-5 col-sm-2"
          @click="showCashOnDelivery = true"
        >
          <q-img
            :ratio="1"
            src="https://www.loginstore.com/contraentrega/icono-cod.png"
          >
            <div class="absolute-top text-h4 text-center">Contra entrega</div>
          </q-img>
        </q-card>
      </div>

      <q-stepper-navigation>
        <q-btn color="primary" label="Realizar pago" />
        <q-btn
          flat
          @click="step = 2"
          color="primary"
          label="Regresar"
          class="q-ml-sm"
        />
      </q-stepper-navigation>
    </q-step>
    <q-dialog v-model="shipCostState">
      <q-card
        style="width: 60%; min-width: 350px; max-width: 700px"
        class="my-card"
      >
        <q-card-section>
          <div class="text-h5 text-center text-bold">
            Costo de envio calculado
          </div>
          <div class="text-h6 text-center text-bold">S/10 soles</div>
        </q-card-section>
      </q-card>
    </q-dialog>
    <q-dialog persistent v-model="showCashOnDelivery">
      <q-card
        style="width: 60%; min-width: 350px; max-width: 700px"
        class="my-card"
      >
        <q-card-section>
          <div class="text-h5 text-center text-bold q-mb-sm">
            Elige el método de pago
          </div>
          <q-option-group
            :options="onDeliveryCashOptions"
            type="radio"
            v-model="onDeliveryCashOption"
          />
        </q-card-section>
        <q-card-actions align="around">
          <q-btn
            color="primary"
            label="Confirmar"
            @click="showCashOnDelivery = false"
          ></q-btn>
          <q-btn
            flat
            label="Cerrar"
            @click="showCashOnDelivery = false"
          ></q-btn>
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-stepper>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      acceptTerms: [],
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
      paymentOption: null,
      options: [
        { label: "Despacho en domicilio", value: "despacho", color: "secondary" },
        { label: "Retiro en tienda", value: "retiro", color: "secondary" },
      ],
      paymentOptions: [
        {
          label: "Boleta",
          value: "boleta",
          color: "secondary",
        },
        { label: "Factura", value: "factura", color: "secondary" },
      ],
      shipCostState: false,
      showCashOnDelivery: false,
      onDeliveryCashOptions: [
        { label: "Efectivo", value: "efectivo", color: "secondary" },
        { label: "Yape", value: "yape", color: "secondary" },
        {
          label: "POS Inalámbrico Mastercard",
          value: "postmaster",
          color: "secondary",
        },
        { label: "POS Inalámbrico Visa", value: "posvisa", color: "secondary" },
      ],
      onDeliveryCashOption: null,
    };
  },
  name: "paymentStepper",
  methods: {
    confirmShip() {
      this.shipCostState = true;
      this.step = 3;
    },
  },
};
</script>

<style>
</style>