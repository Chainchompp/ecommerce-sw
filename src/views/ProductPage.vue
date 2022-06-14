<template>
  <q-page>
    <div class="row justify-around items-center">
      <div class="col-sm-6 col-xs-12">
        <q-card class="my-card q-my-md">
          <q-card-section>
            <div class="text-h6 q-mb-xs text-center">Chips Ahoy</div>
          </q-card-section>

          <q-img
            style="max-height: 400px"
            src="https://transmarket.pe/wp-content/uploads/2020/05/galleta-chips-ahoy.jpg"
          />
          <q-card-section class="row justify-around">
            <div
              class="
                row
                justify-around
                items-center
                text-h6
                q-mb-xs
                text-center
                col-3
              "
            >
              <q-btn
                @click="productQuantity--"
                dense
                size="sm"
                class="col-3"
                icon="mdi-minus"
              />
              <div class="col-6">
                <q-input v-model="productQuantity" outlined dense />
              </div>

              <q-btn
                @click="productQuantity++"
                dense
                size="sm"
                class="col-3"
                icon="mdi-plus"
              />
            </div>
            <div class="text-h6 q-mb-xs text-center col-3">$1.50</div>
            <div class="text-h6 q-mb-xs text-center col-4">
              <q-btn @click="addToCart()" label="Agregar" />
            </div>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12 q-my-md">
        <div class="text-center text-h4">Caracteristicas</div>
        <q-list bordered class="q-my-sm">
          <q-item>
            <q-item-section avatar>
              <q-icon color="black" name="mdi-minus" />
            </q-item-section>

            <q-item-section>Textura irregular</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="black" name="mdi-minus" />
            </q-item-section>

            <q-item-section>Galleta vainilla</q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="black" name="mdi-minus" />
            </q-item-section>

            <q-item-section>Chispas de chocolate</q-item-section>
          </q-item>

          <q-separator />

          <q-item>
            <q-item-section>
              <q-btn @click="openStockModal()" label="Consultar Stock" />
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <add-product-modal
        :addType="addResult"
        @close-modal="clossAddModal()"
        :showModal="showAddModal"
      ></add-product-modal>
      <product-stock-modal
        @close-modal="closeStockModal()"
        :showModal="showStockModal"
      ></product-stock-modal>
    </div>
  </q-page>
</template>

<script>
import productStockModal from "../components/productStockModal.vue";
import addProductModal from "../components/addProductModal.vue";

export default {
  components: {
    productStockModal,
    addProductModal,
  },
  data() {
    return {
      showStockModal: false,
      showAddModal: false,
      productQuantity: 0,
      addResult: true,
    };
  },
  methods: {
    openStockModal() {
      this.showStockModal = true;
    },
    closeStockModal() {
      this.showStockModal = false;
    },
    openAddModal() {
      this.showAddModal = true;
    },
    clossAddModal() {
      this.showAddModal = false;
    },
    addToCart() {
      if (this.productQuantity > 600) {
        this.addResult = false;
      } else {
        this.addResult = true;
      }
      this.openAddModal();
    },
  },
};
</script>

<style>
</style>