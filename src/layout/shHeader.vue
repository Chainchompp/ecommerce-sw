<template>
  <q-header elevated class="bg-primary desktop-only mobile-hide">
    <q-toolbar>
      <q-btn
        @click="showCategoryModal()"
        flat
        round
        dense
        icon="menu"
        size="xl"
      />
      <q-btn flat round dense icon="mdi-shopping" to="/home" size="xl" />
      <q-space></q-space>
      <img src="../assets/logo.png" style="height: 50px" alt="Logo"/>
      <q-space></q-space>
      <q-btn size="xl" flat round dense icon="mdi-store" to="/store" />
      <q-btn size="xl" flat round dense icon="shopping_cart" to="/cart" />
    </q-toolbar>

    <q-toolbar inset style="padding-right: 58px" class="mobile-hide">
      <q-input
        style="width: 90%"
        dark
        dense
        standout
        v-model="barText"
        input-class="text-right"
        class="q-ml-md"
      >
        <template v-slot:append>
          <q-icon v-if="barText === ''" name="search" />
          <q-icon
            v-else
            name="clear"
            class="cursor-pointer"
            @click="barText = ''"
          />
        </template>
      </q-input>
      <q-space />
      <q-btn
        v-if="!userExists"
        flat
        label="Iniciar sesión"
        @click="showLoginModal()"
        dense
        icon="mdi-account"
        size="md"
      />
      <q-btn-dropdown
        v-if="userExists"
        size="xl"
        flat
        round
        dense
        icon="mdi-account"
      >
        <q-list>
          <q-item to="/profile" clickable v-close-popup>
            <q-item-section>
              <q-item-label>Perfil</q-item-label>
            </q-item-section>
          </q-item>
          <q-item to="/trace" clickable v-close-popup>
            <q-item-section>
              <q-item-label>Trace</q-item-label>
            </q-item-section>
          </q-item>
          <q-item @click="logoutUser()"  clickable v-close-popup>
            <q-item-section>
              <q-item-label>Logout</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-toolbar>
    <q-toolbar class="row justify-center mobile-hide bg-secondary">
      <q-tabs
        inline-label
        class="text-black"
        style="width: 100%"
        outside-arrows
        indicator-color="transparent"
      >
        <q-route-tab to="/shop" label="Lácteos" />
        <q-route-tab to="/shop" label="Aguas y Bebidas" />
        <q-route-tab to="/shop" label="Mascotas" />
        <q-route-tab to="/shop" label="Cervezas y Licores" />
        <q-route-tab to="/shop" label="Frutas y Verduras" />
        <q-route-tab to="/shop" label="Limpieza" />
        <q-route-tab to="/shop" label="Embutidos" />
        <q-route-tab to="/shop" label="Carnes y Pescado" />
        <q-route-tab to="/shop" label="Abarrotes" />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script>
import { useUserStore } from "../store/modules/userStore";
import { mapActions, mapState } from "pinia";

export default {
  name: "shHeader",
  data() {
    return {
      barText: "",
    };
  },
  methods: {
    showLoginModal() {
      this.$emit("showLoginModal");
    },
    showCategoryModal() {
      this.$emit("showCategoryModal");
    },
    logoutUser(){
      this.logout()
    }
    ,
    ...mapActions(useUserStore,["logout"])
  },
  computed: {
    ...mapState(useUserStore, ["userExists"]),
  },
};
</script>

<style scoped>
</style>
