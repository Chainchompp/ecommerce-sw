<template>
  <div class="q-px-lg  q-pt-md">
    <q-timeline color="teal">
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
     <lottie-player src="https://assets8.lottiefiles.com/packages/lf20_IBzA9e/Shipping.json"  background="transparent"  speed="1"  style="width: 60%;"  loop  autoplay></lottie-player>
  </div>
</template>

<script>
export default {
  name: "TracePage",
};
</script>

<style>
</style>