<template>
  <q-header elevated class="bg-cyan">
    <q-toolbar class="mobile-hide">
      <q-btn
        @click="showCategoryModal()"
        flat
        round
        dense
        icon="menu"
        size="xl"
      />
      <q-btn flat round dense icon="mdi-shopping" to="/home" size="xl" />
      <q-space />
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
        flat
        label="Iniciar sesión"
        @click="showLoginModal()"
        dense
        icon="mdi-account"
        size="md"
      />
    </q-toolbar>
    <q-toolbar class="row justify-center mobile-hide">
      <q-tabs
        inline-label
        class="text-white"
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
  },
};
</script>

<style scoped>
</style>
