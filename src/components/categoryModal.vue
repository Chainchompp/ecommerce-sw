<template>
  <div>
    <q-dialog
      @before-hide="showCategoryModal()"
      position="left"
      :model-value="showCategories"
      full-height
      full-width
      transition-show="slide-down"
      transition-hide="slide-down"
    >
      <q-splitter v-model="splitterModel" style="height: 100%">
        <template v-slot:before>
          <q-tabs v-model="tab" vertical class="bg-white">
            <q-tab
              v-for="category in barCategories"
              :key="`categorymodal-${category._id}`"
              :label="category.name"
              :name="category.name"
            >
            </q-tab>
          </q-tabs>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="tab"
            animated
            vertical
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel
              v-for="category in currentSubcategories"
              :key="`tab-panel-${category._id}`"
              class="bg-white q-mb-md"
              style="height: 100%"
              :name="category.name"
            >
              <router-link
                :to="`/shop/${category._id}`"
                class="text-h4"
                >{{ category.name }}</router-link
              >
              <div class="row q-mt-md">
                <div
                  v-for="subCategory in category.SubCategories"
                  :key="`sub-${subCategory._id}`"
                  class="column col-4 q-my-xs"
                >
                  <router-link
                    :to="`/shop/${subCategory._id}`"
                    class="text-weight-bold"
                    >{{ subCategory.name }}</router-link
                  >
                  <router-link
                    :to="`/shop/${subSubCategory._id}`"
                    v-for="subSubCategory in subCategory.children"
                    :key="`sub-sub-${subSubCategory._id}`"
                  >
                    {{ subSubCategory.name }}
                  </router-link>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </q-dialog>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "categoryModal",
  data() {
    return {
      tab: "Abarrotes",
      splitterModel: 20,
      barCategories: [],
      currentSubcategories: [],
    };
  },
  props: ["showCategories"],
  methods: {
    showCategoryModal() {
      this.$emit("showCategoryModal");
    },
    async loadSubArrays(category) {
      const params = new URLSearchParams([["category", category]]);
      const {
        data: { data: subCategory },
      } = await axios.get("http://localhost:5000/ecommerceApi/category/", {
        params,
      });
      this.currentSubcategories.push(subCategory.modalCategories[0]);
    },
  },
  async beforeMount() {
    const {
      data: { data },
    } = await axios.get("http://localhost:5000/ecommerceApi/category/root");
    this.barCategories = data.rootCategories;

    this.barCategories.forEach((e) => {
      this.loadSubArrays(e.name);
    });
  },
};
</script>

<style >
.q-splitter__after {
  width: 80vw !important;
}
.q-tab-panels {
  height: 100% !important;
}
a {
  color: black;
  text-decoration: none; /* no underline */
}
</style>