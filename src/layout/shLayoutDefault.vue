<template>
  <q-layout :view="isMobile ? 'hHh LpR fFf' : 'hHh LpR fff'">
    <q-header v-if="isMobile" class="mobile-only desktop-hide bg-primary">
      <q-toolbar>
        <q-btn flat round dense icon="mdi-shopping" to="/home" size="xl" />
        <q-space />
        <q-btn flat round dense icon="mdi-store" to="/store" size="xl" />
      </q-toolbar>
    </q-header>
    <sh-header
      v-if="!isMobile"
      @show-category-modal="switchCategoryModal()"
      @show-login-modal="switchLoginModal()"
    />
    <sh-footer v-if="!isMobile"></sh-footer>
    <sh-bottom-nav
      v-if="isMobile"
      @open-login-modal="switchLoginModal()"
      @open-category-modal="switchSimplifyCategoryModal()"
    ></sh-bottom-nav>
    <login-modal
      @close-modal="switchLoginModal()"
      :showModal="showLoginModal"
      @open-register="
        switchRegisterModal();
        switchLoginModal();
      "
    ></login-modal>
    <register-modal
      :showModal="showRegisterModal"
      @close-modal="switchRegisterModal()"
    ></register-modal>
    <simplified-category-modal
      @show-category-modal="switchSimplifyCategoryModal()"
      :showCategories="showSimplifyCategoryModal"
    ></simplified-category-modal>
    <category-modal
      @show-category-modal="switchCategoryModal()"
      :showCategories="showCategoryModal"
    ></category-modal>
    <q-page-container>
      <q-page>
        <slot></slot>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import shHeader from "./shHeader.vue";
import shFooter from "./shFooter.vue";
import loginModal from "../components/loginModal.vue";
import registerModal from "../components/registerModal.vue";
import categoryModal from "../components/categoryModal.vue";
import shBottomNav from "./shBottomNav.vue";
import simplifiedCategoryModal from "../components/simplifiedCategoryModal.vue";

import { useQuasar } from "quasar";

export default {
  name: "shLayoutDefault",
  components: {
    shHeader,
    shFooter,
    loginModal,
    categoryModal,
    registerModal,
    shBottomNav,
    simplifiedCategoryModal,
  },
  data() {
    return {
      showLoginModal: false,
      showCategoryModal: false,
      showRegisterModal: false,
      showSimplifyCategoryModal: false,
    };
  },
  methods: {
    switchLoginModal() {
      this.showLoginModal = !this.showLoginModal;
    },
    switchCategoryModal() {
      this.showCategoryModal = !this.showCategoryModal;
    },
    switchRegisterModal() {
      this.showRegisterModal = !this.showRegisterModal;
    },
    switchSimplifyCategoryModal() {
      this.showSimplifyCategoryModal = !this.showSimplifyCategoryModal;
    },
  },
  setup() {
    const $q = useQuasar();

    const isMobile = $q.platform.is.mobile;
    return {
      isMobile,
    };
  },
};
</script>

<style scoped>
</style>
