<template>
  <q-layout>
    <q-header class="mobile-only bg-teal" style="position:sticky">
       <q-toolbar >
      <q-btn flat round dense icon="mdi-shopping" to="/home" size="xl" />
    </q-toolbar>
    </q-header>
    <sh-header
      @show-category-modal="switchCategoryModal()"
      @show-login-modal="switchLoginModal()"
      :default-layout="true"
    />
    <category-modal
      @show-category-modal="switchCategoryModal()"
      :showCategories="showCategoryModal"
    ></category-modal>
    <q-page-container>
      <slot></slot>
    </q-page-container>
    <sh-footer></sh-footer>
    <sh-bottom-nav @open-login-modal="switchLoginModal()" @open-category-modal="switchSimplifyCategoryModal()"></sh-bottom-nav>
    <login-modal
      @close-modal="switchLoginModal()"
      :showModal="showLoginModal"
      @open-register="switchRegisterModal();switchLoginModal() "
    ></login-modal>
    <register-modal :showModal="showRegisterModal"
    @close-modal="switchRegisterModal()"></register-modal>
    <simplified-category-modal @show-category-modal="switchSimplifyCategoryModal()" :showCategories="showSimplifyCategoryModal"></simplified-category-modal>
  </q-layout>
</template>

<script>
import shHeader from "./shHeader.vue";
import shFooter from "./shFooter.vue";
import loginModal from "../components/loginModal.vue";
import registerModal from "../components/registerModal.vue"
import categoryModal from "../components/categoryModal.vue";
import shBottomNav from "./shBottomNav.vue"
import simplifiedCategoryModal from "../components/simplifiedCategoryModal.vue"

export default {
  name: "shLayoutDefault",
  components: {
    shHeader,
    shFooter,
    loginModal,
    categoryModal,
    registerModal,
    shBottomNav,
    simplifiedCategoryModal
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
    switchSimplifyCategoryModal(){
      this.showSimplifyCategoryModal = !this.showSimplifyCategoryModal
    }
  },
};
</script>

<style scoped>
</style>
