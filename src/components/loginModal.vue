<template>
  <q-dialog :model-value="showModal" persistent>
    <q-card style="min-width: 350px; width: 60%; max-width: 600px">
      <div class="row justify-end q-mt-md q-mr-md">
        <q-btn round color="grey-8" icon="close" @click="closeModal()" ripple />
      </div>
      <q-card-section>
        <div class="text-h4 text-center q-my-md">Iniciar sesión</div>
        <q-input
          label="Correo"
          v-model="userEmail"
          outlined
          dense
          :rules="emailRules"
          :error="emailError"
          ref="userEmailInput"
          class="q-my-md q-mx-xl"
        />

        <q-input
          label="Contraseña"
          v-model="userPassword"
          outlined
          dense
          :rules="passwordRules"
          :error="passwordError"
          class="q-my-md q-mx-xl"
          type="password"
          ref="userPasswordInput"
        />
        <div v-if="invalidLogin" class="text-center text-negative">
          Email o contraseña inválidos
        </div>
      </q-card-section>
      <q-card-actions align="around" class="text-primary">
        <q-btn label="Ingresar" @click="loginUser()" />
        <q-btn label="Registrarse" @click="openRegisterModal()" />
      </q-card-actions>
      <q-card-section>
        <div class="text-center">Haz olvidado tu contraseña? Click aquí</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { useUserStore } from "../store/modules/userStore";
import { mapActions } from "pinia";

export default {
  data() {
    return {
      userEmail: "",
      userPassword: "",
      invalidLogin: false,
      emailError: false,
      passwordError: false,
      emailRules: [
        (val) => !!val || "Debe ingresar un email",
        (val) =>
          !/^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/.test(
            val
          ) || "El correo debe ser válido",
      ],
      passwordRules: [
        (val) => !!val || "Debe ingresar una contraseña",
        (val) =>
          val.length >= 7 || "La contraseña debe tener más de 6 carácteres",
      ],
    };
  },
  props: ["showModal"],
  name: "loginModal",
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    async loginUser() {
      
      if(this.$refs.userEmailInput.validate() && this.$refs.userPasswordInput.validate()){
        try {
        await this.login(this.userEmail, this.userPassword);
        setTimeout(() => {
           this.$emit("closeModal");
        }, 1000);
      } catch (error) {
        this.invalidLogin = true;
          this.emailError = true;
          this.passwordError = true;
        setTimeout(() => {
          this.invalidLogin = false;
          this.emailError = false;
          this.passwordError = false;
          this.userEmail = ""
          this.userPassword = ""
        }, 2000);
      }
      }else{
        if(!this.userEmail){
          this.emailError = true
        }
      }
      
    },
    openRegisterModal() {
      this.$emit("openRegister");
    },
    ...mapActions(useUserStore, ["login"]),
  },
};
</script>

<style>
</style>