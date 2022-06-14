<template>
  <div>
    <div class="q-mt-lg text-center text-h4">Carrito de compras</div>
    <div class="row q-mx-md justify-around">
      <div class="col-md-7 col-xs-12 col-sm-12 q-my-lg">
        <q-card flat bordered class="my-card q-my-sm">
          <q-card-section horizontal>
            <q-img
              class="col-md-3 col-xs-2"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-card-section class="col-md-3">
              <div class="text-center text-subtitle1 q-my-sm">Producto</div>
              <div class="row justify-center">
                <q-btn dense to="/product" size="sm" label="Ver producto" />
              </div>
            </q-card-section>
            <q-card-section class="row justify-center q-px-xs col-md-6 col-xs-7 text-center">
              <div class="col-3">
                <p>P. Unit.</p>
                <p>500</p>
              </div>
              <div class="col-5">
                <p>Cantidad</p>
                <div class="row justify-around items-center">
                  <q-btn dense size="sm" icon="mdi-minus" />
                  <div>4</div>
                  <q-btn dense size="sm" icon="mdi-plus" />
                </div>
              </div>
              <div class="col-4">
                <p>Subtotal</p>
                <p>2000</p>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
        <q-card flat bordered class="my-card q-my-sm">
          <q-card-section horizontal>
            <q-img
              class="col-md-3 col-xs-2"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-card-section class="col-md-3">
              <div class="text-center text-subtitle1 q-my-sm">Producto</div>
              <div class="row justify-center">
                <q-btn dense size="sm" label="Ver producto" />
              </div>
            </q-card-section>
            <q-card-section class="row justify-center q-px-xs col-md-6 col-xs-7 text-center">
              <div class="col-3">
                <p>P. Unit.</p>
                <p>500</p>
              </div>
              <div class="col-5">
                <p>Cantidad</p>
                <div class="row justify-around items-center">
                  <q-btn dense size="sm" icon="mdi-minus" />
                  <div>4</div>
                  <q-btn dense size="sm" icon="mdi-plus" />
                </div>
              </div>
              <div class="col-4">
                <p>Subtotal</p>
                <p>2000</p>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
         <q-card flat bordered class="my-card q-my-sm">
          <q-card-section horizontal>
            <q-img
              class="col-md-3 col-xs-2"
              src="https://cdn.quasar.dev/img/parallax2.jpg"
            />
            <q-card-section class="col-md-3">
              <div class="text-center text-subtitle1 q-my-sm">Producto</div>
              <div class="row justify-center">
                <q-btn dense size="sm" label="Ver producto" />
              </div>
            </q-card-section>
            <q-card-section class="row justify-center q-px-xs col-md-6 col-xs-7 text-center">
              <div class="col-3">
                <p>P. Unit.</p>
                <p>500</p>
              </div>
              <div class="col-5">
                <p>Cantidad</p>
                <div class="row justify-around items-center">
                  <q-btn dense size="sm" icon="mdi-minus" />
                  <div>4</div>
                  <q-btn dense size="sm" icon="mdi-plus" />
                </div>
              </div>
              <div class="col-4">
                <p>Subtotal</p>
                <p>2000</p>
              </div>
            </q-card-section>
          </q-card-section>
        </q-card>
      </div>
      <div class="col-md-4 col-xs-12 col-sm-12 q-my-lg">
        <q-card flat bordered class="my-card q-pa-md text-subtitle1">
          <q-card-section>
            <div class="row justify-between text-weight-bold">
              <p>Subtotal:</p>
              <p>6000</p>
            </div>
            <div class="row justify-between">
              <p>Envío:</p>
              <p>Por calcular</p>
            </div>
            <q-separator />
            <div class="row justify-between text-weight-bold q-mt-md">
              <p>Total:</p>
              <p>6000</p>
            </div>
            <div class="row justify-center">
              <q-btn
                style="width: 90%"
                class="q-py-md"
                color="primary"
                to="/buy"
                icon="mdi-lock"
                dense
                label="Checkout"
              ></q-btn>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShoppingCartPage",
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
</style>
