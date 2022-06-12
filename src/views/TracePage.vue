<template>
  <div class="q-px-lg  q-pt-md row justify-around">
    <q-timeline color="teal" class="col-xs-12 col-sm-6">
      <q-timeline-entry class="text-center q-mb-md" heading>
        Estado de tu pedido
      </q-timeline-entry>

      <q-timeline-entry
        title="Pedido realizado"
        subtitle="Febrero 22, 10:00 p.m"
      >
      </q-timeline-entry>

      <q-timeline-entry
        title="Pago confirmado"
        subtitle="Febrero 22, 10:02 p.m"
      >
      </q-timeline-entry>
      <q-timeline-entry
        title="Enviado"
        subtitle="Febrero 23, 3:02 p.m"
        color="teal"
        icon="done_all"
      >
      </q-timeline-entry>
      <q-timeline-entry
        title="Entrega Esperada"
        subtitle="Febrero 23, 3:12 p.m"
        color="grey-8"
      >
      </q-timeline-entry>


    </q-timeline>
     <lottie-player class="col-xs-12 col-sm-4" src="https://assets8.lottiefiles.com/packages/lf20_IBzA9e/Shipping.json"  background="transparent"  speed="1"    loop  autoplay></lottie-player>
  </div>
</template>

<script>
export default {
  name: "TracePage",
};
</script>

<style>
</style>