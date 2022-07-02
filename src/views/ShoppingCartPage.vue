<template>
  <q-page>
    <div class="q-mt-lg text-center text-h4">Carrito de compras</div>
    <div class="row q-mx-md justify-around">
      <div class="col-md-7 col-xs-12 col-sm-12 q-my-lg">
        <q-card flat bordered class="my-card q-my-sm">
          <q-card-section horizontal>
            <q-img
              class="col-md-3 col-xs-2"
              src="data:image/jpeg;base64,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"
            />
            <q-card-section class="col-md-3">
              <div class="text-center text-subtitle1 q-my-sm">Producto</div>
              <div class="row justify-center">
                <q-btn dense to="/product/123" size="sm" label="Ver producto" />
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
              src="https://plazavea.vteximg.com.br/arquivos/ids/1504479-450-450/20070084.jpg"
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
              src="https://plazavea.vteximg.com.br/arquivos/ids/718219-450-450/111.jpg"
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
  </q-page>
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
