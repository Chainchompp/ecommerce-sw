<template>
  <q-layout>
    <sh-payment-header :default-layout="true" />
    <q-page-container>
    <slot></slot>
    </q-page-container>
  </q-layout>
</template>

<script>
import shPaymentHeader from "./shPaymentHeader.vue";


export default {
  name: "shLayoutPayment",
  components: {
    shPaymentHeader,
  },
};
</script>

<style scoped>
</style>
