<template>
  <div v-if="categoryInformation != null" class="row items-start">
    <div class="col-md-3 col-lg-2 q-mt-md mobile-hide justify-center row">
      <div class="text-h5 text-center q-px-xs">
        {{ categoryInformation.name }}
      </div>
      <q-list class="col-12 text-center" dense>
        <q-expansion-item
          v-if="categoryInformation.children.length != 0"
          expand-separator
          label="SubCategorias"
          class="col-12 text-subtitle1 q-my-sm"
          dense
          group="subcategories"
        >
          <div class="text-body1 text-left q-pl-xl">
            <div
              v-for="subCategory in categoryInformation.children"
              :key="`subcategory-${subCategory._id}`"
            >
              <router-link
                :to="{ path: `/shop/${subCategory._id}`, query: { page: 1 } }"
              >
                {{ capitalize(subCategory.name) }}
              </router-link>
            </div>
          </div>
        </q-expansion-item>
      </q-list>
      <q-list class="col-12 text-center" dense>
        <q-expansion-item
          expand-separator
          label="Filtros"
          class="col-12 text-subtitle1 q-my-sm"
          dense
        >
          <q-expansion-item
            switch-toggle-side
            dense-toggle
            label="Marca"
            class="col-12 text-subtitle2 q-my-sm"
            :header-inset-level="0"
            :content-inset-level="1"
          >
            <q-option-group
              class="text-body1"
              :options="options"
              type="checkbox"
              v-model="group"
            />
          </q-expansion-item>
          <q-expansion-item
            switch-toggle-side
            dense-toggle
            label="Precio"
            :header-inset-level="0"
            :content-inset-level="1"
            class="col-12 text-subtitle2 q-my-sm"
          >
            <div class="row items-center justify-around q-my-sm">
              <div class="text-body2">Min</div>
              <q-input class="col-5" dense outlined />
            </div>
            <div class="row items-center justify-around">
              <div class="text-body2">Max</div>
              <q-input class="col-5" dense outlined />
            </div>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </div>
    <div class="col-md-9 col-lg-10 col-xs-12 q-my-sm">
      <div class="row justify-end items-end q-px-lg">
        <q-select
          class="col-4"
          outlined
          dense
          v-model="orderBy"
          :options="orderOptions"
          label="Ordenar"
        />
      </div>
      <div v-if="products.length != 0" class="row justify-around q-my-md">
        <product-card
          v-for="product in products"
          :key="`product-card-${product._id}`"
          :productData="product"
        ></product-card>
      </div>
      <div
        v-if="products.length == 0"
        class="row justify-around q-my-md text-h5"
      >
        No hay resultados para los filtros seleccionados
      </div>
      <div class="q-pa-lg flex flex-center">
        <q-pagination
          v-if="paginationInfo != null"
          v-model="current"
          color="black"
          :max="paginationInfo.totalPages"
          :max-pages="6"
          boundary-numbers
          direction-links
        />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
import axios from "axios";

export default {
  name: "ProductSearchPage",
  data() {
    return {
      options: [],
      categoryInformation: null,
      group: [],
      orderBy: null,
      paginationInfo: null,
      products: [],
      orderOptions: ["Por precio asc.", "Por precio desc.", "Más populares"],
      current: 1,
    };
  },
  components: {
    ProductCard,
  },
  async beforeMount() {
    await this.getCategoryInfo(this.$route.params.id);
    await this.getProducts(this.categoryInformation.name,this.$route.query.page,this.group);
  },
  async beforeRouteUpdate(to, from) {
    // react to route changes...
    await this.getCategoryInfo(to.params.id);
    await this.getProducts(this.categoryInformation.name, to.query.page,this.group);
  },
  methods: {
    async getProducts(categoryName, page, brands) {
      const params = brands.length > 0
        ? new URLSearchParams([
            ["category", categoryName],
            ["limit", 20],
            ["page", page],
            ["brands", brands],
          ])
        : new URLSearchParams([
            ["category", categoryName],
            ["limit", 20],
            ["page", page],
          ]);
      const {
        data: { data: productInformation },
      } = await axios.get(
        `http://localhost:5000/ecommerceApi/product/category`,
        {
          params,
        }
      );
      this.products = productInformation.products;
      this.paginationInfo = productInformation.pagination;
      this.options = productInformation.facets[0].brands.map((e) => {
        return {
          label: `${this.capitalize(e._id)} (${e.count})`,
          value: e._id,
        };
      });
    },
    capitalize(word) {
      return word[0].toUpperCase() + word.slice(1).toLowerCase();
    },
    async getCategoryInfo(id) {
      const params = new URLSearchParams([["id", id]]);
      const {
        data: { data: categoryInformation },
      } = await axios.get(`http://localhost:5000/ecommerceApi/category/by-id`, {
        params,
      });

      this.categoryInformation = categoryInformation.categories[0];
    },
  },
  watch: {
    current(newValue) {
      if (this.group.length > 0) {
        this.$router.replace({ query: { page: newValue, brands: this.group } });
      } else {
        this.$router.replace({ query: { page: newValue } });
      }
      
    },
    group(newValue) {
      this.$router.push({ query: { brands: newValue, page: this.current } });
    },
  },
};
</script>

<style scoped lang="scss">
.q-checkbox .row .inline {
  display: flex;
}
</style>