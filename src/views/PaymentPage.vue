<template>
  <div class="fit row wrap justify-around items-start">
    <payment-stepper class="col-md-7  q-mt-md col-xs-12"></payment-stepper>
    <div class="col-md-4 col-xs-12 q-mt-md ">
      <q-card  class="q-pa-lg">
        <q-card-section>
          <div class="text-center text-h6 text-weight-bold q-mb-md">
            Resumen de la orden
          </div>
          <q-separator />
          <div class="row justify-between q-mt-md q-mb-sm">
            <div>Subtotal:</div>
            <div>S/ 200</div>
          </div>
          <div class="row justify-between q-mt-md q-mb-sm">
            <div>Envio:</div>
            <div>Calculando</div>
          </div>

          <div class="row justify-between q-mt-md q-mb-sm text-weight-bold">
            <div>Total:</div>
            <div>S/ 200</div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import paymentStepper from "../components/paymentStepper.vue";

export default {
  name: "PaymentPage",
  data() {
    return {};
  },
  methods: {},
  computed: {},
  components: {
    paymentStepper,
  },
};
</script>

<style scoped>
</style>
