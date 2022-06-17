<template>
<q-page>
  <div class="row items-start">
    <div class="col-md-3 col-lg-2 mobile-hide justify-center row">
      <div class="col-12 q-ml-md text-h4 q-my-sm">Mascotas</div>
      <q-list class="col-12 text-center" dense>
        <q-expansion-item
          expand-separator
          label="Otras Mascotas"
          class="col-12 text-h6 q-my-sm"
          dense
          group="subcategories"
        >
          <div class="text-body1">
            <div>Accesorios</div>
            <div>Alimentos</div>
            <div>Higiene y Cuidado</div>
          </div>
        </q-expansion-item>
      </q-list>
      <q-list class="col-12 text-center" dense>
        <q-expansion-item
          expand-separator
          label="Para Gatos"
          class="col-12 text-h6 q-my-sm"
          dense
          group="subcategories"
        >
          <div class="text-body1">
            <div>Alimento Humedo para Gatos</div>
            <div>Alimento Seco para Gatos</div>
            <div>Arena para Gatos</div>
            <div>Camas y Condominios para Gatos</div>
            <div>Higiene y Accesorios para Gatos</div>
            <div>Juguetes y Rascadores para Gatos</div>
            <div>Snacks para Gatos</div>
          </div>
        </q-expansion-item>
      </q-list>
      <q-list class="col-12 text-center" dense>
        <q-expansion-item
          expand-separator
          label="Para Perros"
          class="col-12 text-h6 q-my-sm"
          dense
          group="subcategories"
        >
          <div class="text-body1">
            <div>Accesorios para Perros</div>
            <div>Alimento Humedo para Perros</div>
            <div>Alimento Natural para Perros</div>
            <div>Alimento Seco para Perros</div>
            <div>Articulos de Transporte</div>
            <div>Camas para Perros</div>
            <div>Casas para Perros</div>
            <div>Higiene y Cuidado para Perros</div>
            <div>Juguetes para Perros</div>
            <div>Ropa para Perros</div>
            <div>Snacks para Perros</div>>
          </div>
        </q-expansion-item>
      </q-list>
      <q-list class="col-12 text-center" dense>
        <q-expansion-item
          expand-separator
          label="Filtros"
          class="col-12 text-h6 q-my-sm"
          dense
        >
          <q-expansion-item
            switch-toggle-side
            dense-toggle
            label="Marca"
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
          >
            <div class="row items-center justify-around q-my-sm">
              <div class="text-body1">Min</div>
              <q-input class="col-5" dense outlined />
            </div>
            <div class="row items-center justify-around">
              <div class="text-body1">Max</div>
              <q-input class="col-5" dense outlined />
            </div>
          </q-expansion-item>
        </q-expansion-item>
      </q-list>
    </div>
    <div class="col-md-9 col-lg-10 col-xs-12 q-my-sm">
      <div class="row justify-between items-end q-px-lg">
        <div class="text-h3 text-center q-mt-sm col-4">Categoria</div>
        <q-select
          class="col-4"
          outlined
          dense
          v-model="orderBy"
          :options="orderOptions"
          label="Ordenar"
        />
      </div>
      <div class="row justify-around q-my-md">
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
        <product-card></product-card>
      </div>
    </div>
  </div>
</q-page>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "ProductSearchPage",
  data() {
    return {
      options: [
        { label: "MiMaskot", value: "marca1", color: "black" },
        { label: "Pedigree", value: "marca2", color: "black" },
        { label: "Otros", value: "marca3", color: "black" },
      ],
      group: [],
      orderBy: null,
      orderOptions: ["Por precio asc.", "Por precio desc.", "Más populares"],
    };
  },
  components: {
    ProductCard,
  },
};
</script>

<style scoped lang="sass">
</style>