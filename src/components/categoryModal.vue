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
            <q-tab name="Lácteos" label="Lácteos" />
            <q-tab name="Aguas y Bebidas" label="Aguas y Bebidas" />
            <q-tab name="Mascotas" label="Mascotas" />
            <q-tab name="Cervezas y Licores" label="Cervezas y Licores" />
            <q-tab name="Frutas y Verduras" label="Frutas y Verduras" />
            <q-tab name="Limpieza" label="Limpieza" />
            <q-tab name="Embutidos" label="Embutidos" />
            <q-tab name="Carnes y Pescado" label="Carnes y Pescado" />
            <q-tab name="Abarrotes" label="Abarrotes" />
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
            <q-tab-panel class="bg-white" style="height: 100%" name="Lácteos">
              <div class="text-h4 q-mb-md">Lácteos</div>
              <div class="row">
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Aguas y Bebidas">
              <div class="text-h4 q-mb-md">Aguas y Bebidas</div>
              <div class="row">
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Mascotas">
              <div class="text-h4 q-mb-md">Movies</div>
              <div class="row">
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                  <div >1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                </div>
                <div class="column col-4">
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
                  <div>1234</div>
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
export default {
  name: "categoryModal",
  data() {
    return {
      tab: "mails",
      splitterModel: 20,
    };
  },
  props: ["showCategories"],
  methods: {
    showCategoryModal() {
      this.$emit("showCategoryModal");
    },
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
</style>