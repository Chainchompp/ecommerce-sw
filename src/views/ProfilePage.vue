<template>
<q-page>
  <div class="row  items-start">
    <q-card class="my-card col-xs-12 col-md-5 self-start">
      <q-img :ratio="1" width="100%"
        :src="profileImage=null? 'https://swbackend.blob.core.windows.net/newcontainer/FONDO_USUARIO.png' : profileImage"
      >
        <div class="absolute-bottom text-h4 text-center">{{`${user.name} ${user.paternal_surname}`}}</div>
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
        {{userOrders}}
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
import axios from "axios"
export default {
  name: "ProfilePage",
  data() {
    return {
      profileImage: null,
      userOrders: 0
    }
  },
  computed:{
    ...mapState(useUserStore,['user'])
  },
  async beforeMount(){
    const params = new URLSearchParams([['client-email', this.user.email]]);
    const {data: orders} = await axios.get('http://localhost:5000/ecommerceApi/order/quantity', {params})
    const {data: profile} = await axios.get('http://localhost:5000/ecommerceApi/client/profile', {params})
    this.profileImage = profile.data.profile_img
    this.userOrders = orders.data.ordersQuantity
  }
};
</script>
<style lang="sass" scoped>
.my-card
    width: 100%
</style>
