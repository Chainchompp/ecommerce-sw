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
                  <div >La quesaria</div>
                  <div >Quesos Artesanales</div>
                  <div >Quesos Blandos y Cremosos</div>
                  <div >Quesos Duros y Semiduros</div>
                  <div >Quesos Frescos</div>
                  <div >Quesos Semiblandos</div>
                  <div >Tablas de Queso</div>
                </div>
                <div class="column col-4">
                  <div>Leches</div>
                  <div>Leches Alternativas</div>
                  <div>Leches Evaporadas, en Polvo y Mezclas Lacteas</div>
                  <div>Leches Frescas UHT</div>
                  <div>Leches Maternizadas</div>
                </div>
                <div class="column col-4">
                  <div>Mantequillas Y Margarinas</div>
                  <div>Mantequillas</div>
                  <div>Margarinas</div>
                </div>
                <div class="column col-4">
                  <div >Yogures</div>
                  <div >Yogurt Bebible</div>
                  <div >Yogurt con Cereal</div>
                  <div >Yogurt Frutado y Postres</div>
                  <div >Yogurt Griego</div>
                  <div >Yogurt Infantil</div>
                  <div >Yogurt Probiotico y Funcional</div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Aguas y Bebidas">
              <div class="text-h4 q-mb-md">Aguas y Bebidas</div>
              <div class="row">
                <div class="column col-4">
                  <div >Aguas</div>
                  <div >Agua con Gas</div>
                  <div >Agua en Caja</div>
                  <div >Agua Saborizada</div>
                  <div >Agua sin Gas</div>
                  <div >Agua Tonica</div>
                </div>
                <div class="column col-4">
                  <div>Bebidas Regeneradoreas</div>
                  <div>Energizantes</div>
                  <div>Rehidratantes</div>
                </div>
                <div class="column col-4">
                  <div>Gaseosas</div>
                  <div>Gaseosas Ligth y Zero</div>
                  <div>Gaseosas Regulares</div>
                </div>
                <div class="column col-4">
                  <div >Hielo</div>
                </div>
                <div class="column col-4">
                  <div>Jugos y Otras Bebidas</div>
                  <div>Jugos Naturales</div>
                  <div>Otras Bebidas</div>
                  <div>Refrescos Preparados e Instantaneos</div>
                  <div>Te helado</div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Mascotas">
              <div class="text-h4 q-mb-md">Mascotas</div>
              <div class="row">
                <div class="column col-4">
                  <div class="text-bold" >Otras Mascotas</div>
                  <div >Accesorios</div>
                  <div >Alimentos</div>
                  <div >Higiene y Cuidado</div>
                </div>
                <div class="column col-4">
                  <div class="text-bold">Para Gatos</div>
                  <div>Alimento Humedo para Gatos</div>
                  <div>Alimento Seco para Gatos</div>
                  <div>Arena para Gatos</div>
                  <div>Camas y Condominios para Gatos</div>
                  <div>Higiene y Accesorios para Gatos</div>
                  <div>Juguetes y Rascadores para Gatos</div>
                  <div>Snacks para Gatos</div>
                </div>
                <div class="column col-4">
                  <div class="text-bold">Para Perros</div>
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
                  <div>Snacks para Perros</div>
                </div>
              </div>
            </q-tab-panel>
            
            <q-tab-panel name="Cervezas y Licores">
              <div class="text-h4 q-mb-md">Cervezas y Licores</div>
              <div class="row">
                <div class="column col-4">
                  <div >Otras Mascotas</div>
                  <div >Accesorios</div>
                  <div >Alimentos</div>
                  <div >Higiene y Cuidado</div>
                </div>
                <div class="column col-4">
                  <div>Para Gatos</div>
                  <div>Alimento Humedo para Gatos</div>
                  <div>Alimento Seco para Gatos</div>
                  <div>Arena para Gatos</div>
                  <div>Camas y Condominios para Gatos</div>
                  <div>Higiene y Accesorios para Gatos</div>
                  <div>Juguetes y Rascadores para Gatos</div>
                  <div>Snacks para Gatos</div>
                </div>
                <div class="column col-4">
                  <div>Para Perros</div>
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
                  <div>Snacks para Perros</div>
                </div>
              </div>
            </q-tab-panel>

            <q-tab-panel name="Frutas y Verduras">
              <div class="text-h4 q-mb-md">Frutas y Verduras</div>
              <div class="row">
                <div class="column col-4">
                  <div >Otras Mascotas</div>
                  <div >Accesorios</div>
                  <div >Alimentos</div>
                  <div >Higiene y Cuidado</div>
                </div>
                <div class="column col-4">
                  <div>Para Gatos</div>
                  <div>Alimento Humedo para Gatos</div>
                  <div>Alimento Seco para Gatos</div>
                  <div>Arena para Gatos</div>
                  <div>Camas y Condominios para Gatos</div>
                  <div>Higiene y Accesorios para Gatos</div>
                  <div>Juguetes y Rascadores para Gatos</div>
                  <div>Snacks para Gatos</div>
                </div>
                <div class="column col-4">
                  <div>Para Perros</div>
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
                  <div>Snacks para Perros</div>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="Limpieza">
              <div class="text-h4 q-mb-md">Limpieza</div>
              <div class="row">
                <div class="column col-4">
                  <div >Otras Mascotas</div>
                  <div >Accesorios</div>
                  <div >Alimentos</div>
                  <div >Higiene y Cuidado</div>
                </div>
                <div class="column col-4">
                  <div>Para Gatos</div>
                  <div>Alimento Humedo para Gatos</div>
                  <div>Alimento Seco para Gatos</div>
                  <div>Arena para Gatos</div>
                  <div>Camas y Condominios para Gatos</div>
                  <div>Higiene y Accesorios para Gatos</div>
                  <div>Juguetes y Rascadores para Gatos</div>
                  <div>Snacks para Gatos</div>
                </div>
                <div class="column col-4">
                  <div>Para Perros</div>
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
                  <div>Snacks para Perros</div>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="Embutidos">
              <div class="text-h4 q-mb-md">Embutidos</div>
              <div class="row">
                <div class="column col-4">
                  <div >Otras Mascotas</div>
                  <div >Accesorios</div>
                  <div >Alimentos</div>
                  <div >Higiene y Cuidado</div>
                </div>
                <div class="column col-4">
                  <div>Para Gatos</div>
                  <div>Alimento Humedo para Gatos</div>
                  <div>Alimento Seco para Gatos</div>
                  <div>Arena para Gatos</div>
                  <div>Camas y Condominios para Gatos</div>
                  <div>Higiene y Accesorios para Gatos</div>
                  <div>Juguetes y Rascadores para Gatos</div>
                  <div>Snacks para Gatos</div>
                </div>
                <div class="column col-4">
                  <div>Para Perros</div>
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
                  <div>Snacks para Perros</div>
                </div>
              </div>
            </q-tab-panel>
            <q-tab-panel name="Carnes y Pescado">
              <div class="text-h4 q-mb-md">Carnes y Pescado</div>
              <div class="row">
                <div class="column col-4">
                  <div >Otras Mascotas</div>
                  <div >Accesorios</div>
                  <div >Alimentos</div>
                  <div >Higiene y Cuidado</div>
                </div>
                <div class="column col-4">
                  <div>Para Gatos</div>
                  <div>Alimento Humedo para Gatos</div>
                  <div>Alimento Seco para Gatos</div>
                  <div>Arena para Gatos</div>
                  <div>Camas y Condominios para Gatos</div>
                  <div>Higiene y Accesorios para Gatos</div>
                  <div>Juguetes y Rascadores para Gatos</div>
                  <div>Snacks para Gatos</div>
                </div>
                <div class="column col-4">
                  <div class="text-bold">Para Perros</div>
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
                  <div>Snacks para Perros</div>
                </div>
              </div>
            </q-tab-panel>
             <q-tab-panel name="Abarrotes">
              <div class="text-h4 q-mb-md">Abarrotes</div>
              <div class="row">
                <div class="column col-4">
                  <div >Aceites</div>
                  <div >Aceite Vegetal</div>
                  <div >Aceite de Oliva</div>
                  <div >Aceites Especiales</div>
                  <div >Mantecas</div>
                </div>
                <div class="column col-4">
                  <div>Alimentos en Conserva</div>
                  <div>Encurtidos</div>
                  <div>Frutas en Conserva</div>
                  <div>Mariscos en Conserva</div>
                  <div>Menestras en Conserva</div>
                  <div>Pescado en Conserva</div>
                  <div>Vegetales en Conserva</div>
                </div>
                <div class="column col-4">
                  <div>Arroz</div>
                  <div>Arroz Especial</div>
                  <div>Arroz Extra</div>
                  <div>Arroz Superior</div>
                </div>
                <div class="column col-4">
                  <div>Chocolateria</div>
                  <div>Bombones y Trufas</div>
                  <div>Chocolates Bitter</div>
                  <div>Chocolates de leche</div>
                  <div>Chocolates diet y sin azucar</div>
                  <div>Chocolates rellenos</div>
                  <div>Huevos de pascua</div>
                </div>
                <div class="column col-4">
                  <div>Condimentos</div>
                  <div>Caldo en Cubitos</div>
                  <div>Condimentos y Sazonadores</div>
                  <div>Pures</div>
                  <div>Sal,Sal Parrillera y Sal Especial</div>
                  <div>Salsas para Cocinar</div>
                  <div>Salsas y Bases Instantaneas</div>
                  <div>Sopas y Cremas</div>
                  <div>Vinagres Balsamicos y Especiales</div>
                  <div>Vinagres y Sillao</div>
                </div>
                <div class="column col-4">
                  <div>Pastas</div>
                  <div>Fideos al Huevo y Especiales</div>
                  <div>Fideos Cortos y Pastinas</div>
                  <div>Fideos Largos</div>
                  <div>Pastas rellenas </div>
                  <div>Salsas de Mesa</div>
                  <div>Semola y Polenta</div>
                </div>
                <div class="column col-4">
                  <div>Galletas y Snacks</div>
                  <div>Bizcotelas,Barquillos y Wafers</div>
                  <div>Caramelos, Chupetes y Lentejitas</div>
                  <div>Chifles, Camotes , Yucas y Chicharrones</div>
                  <div>Frutos Secos y Frutos deshidratados</div>
                  <div>Galletas</div>
                  <div>Mani , Habas y Canchita</div>
                  <div>Marshmellows, Gomas y Chicles</div>
                  <div>Piqueos</div>
                </div>
                <div class="column col-4">
                  <div>Menestras</div>
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
                  <div>Snacks para Perros</div>
                </div>
                <div class="column col-4">
                  <div>Reposteria</div>
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
                  <div>Snacks para Perros</div>
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