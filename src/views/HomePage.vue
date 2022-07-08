<template>
   <q-page  >
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="600px"
      navigation
      infinite
      :autoplay="autoplay"
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
    >
      <q-carousel-slide
        v-for="(item, i) in top3"
        :name="i + 1"
        :img-src="item.source"
        :key="`carousel-item-${i}`"
      >
      </q-carousel-slide>
    </q-carousel>

    <div class="bg-secondary">
      <p class="text-subtitle1 text-center text-bold">LOS MÁS VENDIDOS</p>
    </div>

    <div class="bg-secondary">
      <p class="text-subtitle1 text-center text-bold">ABARROTES</p>
    </div>

    <div class="q-pa-md q-mt-xl justify-center row q-gutter-md">
      <q-card
        v-for="(item, i) in topSellers"
        :key="`top-sellers-${i}`"
        class="my-card col-xs-12 col-sm-5 col-md-2"
      >
        <q-img :src="item.source">
          <div class="absolute-bottom text-subtitle2 text-center">
            Abarrotes
          </div>
        </q-img>
      </q-card>
    </div>
    
    <div class="bg-secondary">
      <p class="text-subtitle1 text-center text-bold">BEBIDAS</p>
    </div>

    <div class="q-pa-md q-mt-xl justify-center row q-gutter-md">
      <q-card
        v-for="(item, i) in topDrinks"
        :key="`top-sellers-${i}`"
        class="my-card col-xs-12 col-sm-5 col-md-2"
      >
        <q-img :src="item.source">
          <div class="absolute-bottom text-subtitle2 text-center">
            Bebidas
          </div>
        </q-img>
      </q-card>
    </div>

    <div class="bg-secondary">
      <p class="text-subtitle1 text-center text-bold">LÁCTEOS</p>
    </div>

    <div class="q-pa-md q-mt-xl justify-center row q-gutter-md">
      <q-card
        v-for="(item, i) in topMilk"
        :key="`top-sellers-${i}`"
        class="my-card col-xs-12 col-sm-5 col-md-2"
      >
        <q-img :src="item.source">
          <div class="absolute-bottom text-subtitle2 text-center">
            Lácteos
          </div>
        </q-img>
      </q-card>
    </div>
   </q-page>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      slide: 1,
      autoplay: true,
      top3: [
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/CARRU_UNO.png",
          name: "Canasta",
        },
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/CARRU_DOS.jpg",
          name: "Nutritivo",
        },
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/CARRU_TRES.jpg",
          name: "Frutas",
        },
      ],
      topSellers: [
        {
          source: "https://plazavea.vteximg.com.br/arquivos/ids/11178375-450-450/161.jpg",
          name: "Aceite",
        },
        {
          source: "https://plazavea.vteximg.com.br/arquivos/ids/8773496-450-450/199315.jpg",
          name: "Leche",
        },
        {
          source: "https://plazavea.vteximg.com.br/arquivos/ids/554165-450-450/641425.jpg",
          name: "Arroz",
        },
        {
          source: "https://plazavea.vteximg.com.br/arquivos/ids/2405480-450-450/20238113.jpg",
          name: "Hot Dog",
        },
      ],
      topDrinks: [
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/SAN_LUIS_SIN_GAS_PERSONAL.png",
          name: "Agua Cielo",
        },
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/COCA_COLA_2,25LITROS.png",
          name: "Leche",
        },
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/TAMPICO_PINA_PERSONAL.png",
          name: "Arroz",
        },
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/COCA_COLA_SIN_AZUCAR_PERSONAL.png",
          name: "Hot Dog",
        },
      ],
            topMilk: [
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/YOGURT_DURAZNO_GLORIA.jpg",
          name: "Aceite",
        },
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/YOGURT_FRESA_BATIMIX_GLORIA.jpg",
          name: "Leche",
        },
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/YOGURT_GRIEGO_DAN_LAC_ARANDANO.jpg",
          name: "Arroz",
        },
        {
          source: "https://swbackend.blob.core.windows.net/newcontainer/YOGURT_GRIEGO_TIGO_NATURAL_DESCREMADO.jpg",
          name: "Hot Dog",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>

<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding-top: 12px
  padding-bottom: 60px
  color: white
  background-color: #003399

.my-card
  width: 100%
  max-width: 250px
</style>

