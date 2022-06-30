<template>
<q-page>
  <div class="row  items-start">
    <q-card class="my-card col-xs-12 col-md-5 self-start">
      <q-img
        src="data:image/jpeg;base64,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"
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
      <div class="text-h6">DNI</div>
      <div class="text-subtitle2 q-pl-md text-grey-8">{{user.document}}</div>
      <div class="text-h6">Número</div>
      <div class="text-subtitle2 q-pl-md text-grey-8">{{user.number}}</div>
      <div class="text-h6">Dirección</div>
      <div class="text-subtitle2 q-pl-md text-grey-8">
        Av. Los Fresnos ... , La Molina
      </div>
      <div class="text-h6">Email</div>
      <div class="text-subtitle2 q-pl-md text-grey-8">{{user.email}}</div>
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
import { mapState } from "pinia";
import { useUserStore } from "../store/modules/userStore";
export default {
  name: "ProfilePage",
  computed:{
    ...mapState(useUserStore,['user'])
  }
};
</script>
<style lang="sass" scoped>
.my-card
    width: 100%
</style>
