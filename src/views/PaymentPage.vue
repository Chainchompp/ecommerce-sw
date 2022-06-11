<template>
  <div class="fit row wrap justify-start items-start content-start">
    <payment-stepper class="col-6 col-xs-12"></payment-stepper>
    <div class="col-6 col-xs-12"></div>
  </div>
</template>

<script>

import paymentStepper from "../components/paymentStepper.vue"

export default {
  name: "PaymentPage",
  data() {
    return {};
  },
  methods: {
  },
  computed: {

  },
  components:{
    paymentStepper
  }
}
</script>

<style scoped>

</style>
