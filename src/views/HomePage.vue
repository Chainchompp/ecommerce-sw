<template>
  <div class="q-my-md">
    <q-carousel
      arrows
      animated
      v-model="slide"
      height="400px"
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
        <div class="absolute-bottom custom-caption">
          <div class="text-subtitle1">{{ item.name }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="bg-secondary">
      <p class="text-subtitle1 text-center text-white">Lo más vendidos</p>
    </div>
    <div class="q-pa-md q-my-xl justify-center row q-gutter-md">
      <q-card
        v-for="(item, i) in topSellers"
        :key="`top-sellers-${i}`"
        class="my-card col-xs-12 col-sm-5 col-md-2"
      >
        <q-img :src="item.source">
          <div class="absolute-bottom text-subtitle2 text-center">
            Mercado 1
          </div>
        </q-img>
      </q-card>
    </div>
  </div>
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
          source: "https://cdn.quasar.dev/img/mountains.jpg",
          name: "Montañas",
        },
        {
          source: "https://cdn.quasar.dev/img/parallax1.jpg",
          name: "Rio",
        },
        {
          source: "https://cdn.quasar.dev/img/parallax2.jpg",
          name: "Puente",
        },
      ],
      topSellers: [
        {
          source: "https://cdn.quasar.dev/img/mountains.jpg",
          name: "Montañas",
        },
        {
          source: "https://cdn.quasar.dev/img/mountains.jpg",
          name: "Montañas",
        },
        {
          source: "https://cdn.quasar.dev/img/mountains.jpg",
          name: "Montañas",
        },
        {
          source: "https://cdn.quasar.dev/img/mountains.jpg",
          name: "Montañas",
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
  background-color: rgba(0, 0, 0, .3)

.my-card
  width: 100%
  max-width: 250px
</style>

