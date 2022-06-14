<template>
<q-page>
  <div class="row  items-start">
    <q-card class="my-card col-xs-12 col-md-5 self-start">
      <q-img
        src="https://i.pinimg.com/originals/15/0f/1c/150f1c82de59346da38c895623ff655c.jpg"
      >
        <div class="absolute-bottom text-h4 text-center">Giro Pinto</div>
      </q-img>
      <q-card-section style="height: 0px !important; padding: 0px">
        <q-btn
        
          fab
          color="primary"
          icon="edit"
          class="absolute mobile-only"
          style="top: 0; right: 12px; transform: translateY(-50%)"
        />
      </q-card-section>
    </q-card>
    <div class="col-xs-12 col-md-7 q-pa-md ">
      <div class="text-h6">Número</div>
      <div class="text-subtitle2 q-pl-md text-grey-8">987654321</div>
      <div class="text-h6">Dirección</div>
      <div class="text-subtitle2 q-pl-md text-grey-8">
        Av. Los Fresnos ... , La Molina
      </div>
      <div class="text-h6">Email</div>
      <div class="text-subtitle2 q-pl-md text-grey-8">giropinto100@gmail.com</div>
      <div class="text-h6">Pedidos realizados</div>
      <div class="text-subtitle2 q-pl-md text-grey-8">
        128
      </div>
      <q-btn
        
          fab
          color="primary"
          icon="edit"
          class="relative mobile-hide q-my-md"
          label="Modificar Perfil"
        />
    </div>
  </div>
</q-page>
</template>

<script>
export default {
  name: "ProfilePage",
};
</script>
<style lang="sass" scoped>
.my-card
    width: 100%
</style>
