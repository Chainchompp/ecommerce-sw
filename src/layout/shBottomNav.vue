<template>
  <q-footer class="mobile-only bg-teal" style="position: sticky" elevated>
    <q-toolbar>
      <q-tabs
      style="width:100%"
        shrink
        stretch
        v-model="tab"
        indicator-color="transparent"
        active-color="white"
        class="bg-teal" align="justify" dense
      >
        <q-tab @click="openLoginModal()" name="account" icon="mdi-account" label="Account" />
        <q-route-tab to="/cart" name="cart" icon="mdi-cart" label="Cart" />
        <q-route-tab to="/store" name="store" icon="mdi-store" label="Store" />
        <q-tab @click="openCategoryModal()" name="menu" icon="mdi-magnify" label="Menu" />
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: "shBottomNav",
  methods:{
    openLoginModal(){
        this.$emit('openLoginModal')
    },
    openCategoryModal(){
        this.$emit('openCategoryModal')
    }
  }
};
</script>

<style>
</style>