<template>
  <q-footer class="mobile-only bg-primary" style="position: sticky" elevated>
    <q-toolbar>
      <q-tabs
        style="width: 100%"
        shrink
        stretch
        v-model="tab"
        indicator-color="transparent"
        active-color="white"
        class="bg-primary"
        align="justify"
        dense
      >
        <q-route-tab
          icon="mdi-account"
          label="User"
          name="User"
          v-if="userExists"
          to="/profile"
        >
        </q-route-tab>
        <q-tab
          v-if="!userExists"
          @click="openLoginModal()"
          name="login"
          icon="mdi-login"
          label="Login"
        />
        <q-route-tab to="/trace" name="trace" icon="mdi-truck" label="Trace" />
        <q-route-tab to="/cart" name="cart" icon="mdi-cart" label="Cart" />
        <q-tab
          @click="openCategoryModal()"
          name="menu"
          icon="mdi-magnify"
          label="Menu"
        />
      </q-tabs>
    </q-toolbar>
  </q-footer>
</template>

<script>
import { useUserStore } from "../store/modules/userStore";
import { mapState } from "pinia";

export default {
  name: "shBottomNav",
  data() {
    return {
      showUserList: false,
    };
  },
  methods: {
    openLoginModal() {
      this.$emit("openLoginModal");
    },
    openCategoryModal() {
      this.$emit("openCategoryModal");
    },
    switchUserList() {
      this.showUserList = !this.showUserList;
    },
  },
  computed: {
    ...mapState(useUserStore, ["userExists"]),
  },
};
</script>

<style  lang="scss">
.user-account-tab {
  .q-btn-dropdown__arrow {
    display: none !important;
  }
}
</style>