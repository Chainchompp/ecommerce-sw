<template>
  <q-dialog
    @before-hide="showCategoryModal()"
    position="right"
    :model-value="showCategories"
    full-height
  >
    <q-card class="column full-height" style="width: 300px">
      <q-card-section>
        <q-list class="col-12 text-center" dense>
          <q-expansion-item
            group="categories"
            expand-separator
            label="Categoria"
            class="col-12 text-h6 q-my-sm"
            dense
          >
            <q-list dense  padding class="text-subtitle2">
              <q-item to="/shop" clickable v-ripple>
                <q-item-section> Item </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section> Item </q-item-section>
              </q-item>

              <q-item clickable v-ripple>
                <q-item-section> Item </q-item-section>
              </q-item>
            </q-list>
          </q-expansion-item>
          <q-expansion-item
            group="categories"
            expand-separator
            label="Categoria"
            class="col-12 text-h6 q-my-sm"
            dense
          >
            <div class="text-body1">
              <div>SubCategoria 1</div>
              <div>SubCategoria 2</div>
              <div>SubCategoria 3</div>
              <div>SubCategoria 4</div>
            </div>
          </q-expansion-item>
          <q-expansion-item
            expand-separator
            group="categories"
            label="Categoria"
            class="col-12 text-h6 q-my-sm"
            dense
          >
            <div class="text-body1">
              <div>SubCategoria 1</div>
              <div>SubCategoria 2</div>
              <div>SubCategoria 3</div>
              <div>SubCategoria 4</div>
            </div>
          </q-expansion-item>
          <q-expansion-item
            expand-separator
            group="categories"
            label="Categoria"
            class="col-12 text-h6 q-my-sm"
            dense
          >
            <div class="text-body1">
              <div>SubCategoria 1</div>
              <div>SubCategoria 2</div>
              <div>SubCategoria 3</div>
              <div>SubCategoria 4</div>
            </div>
          </q-expansion-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "simplifiedCategoryModal",
  props: ["showCategories"],
  methods: {
    showCategoryModal() {
      this.$emit("showCategoryModal");
    },
  },
};
</script>

<style>
</style>