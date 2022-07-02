<template>
  <q-dialog :model-value="showModal" persistent>
    <q-card style="min-width: 450px; width: 70%; max-width: 700px">
      <div class="row justify-end q-mt-md q-mr-md">
        <q-btn round color="grey-8" icon="close" ripple @click="closeModal()" />
      </div>
      <q-card-section>
        <div class="text-h4 text-center q-my-md">Registrarse</div>
        <div class="row justify-around">
          <div class="col-5">
            <q-input
              v-model="userEmail"
              class="q-my-md"
              label="Correo"
              outlined
              dense
              :rules="emailRules"
              lazy-rules
              ref="userEmailInput"
            />
            <q-input
              v-model="userPaternal"
              class="q-my-md"
              label="Ap. Paterno"
              outlined
              dense
              :rules="inputRules"
              lazy-rules
              ref="userPaternalInput"
            />
            <q-input
              v-model="userNumber"
              class="q-my-md"
              label="Celular"
              outlined
              dense
              :rules="numberRules"
              lazy-rules
              ref="userNumberInput"
            />
            <q-input
              v-model="userPassword"
              class="q-my-md"
              label="Contraseña"
              outlined
              dense
              lazy-rules
              :rules="passwordRules"
              ref="userPasswordInput"
              type="password"
            />
          </div>
          <div class="col-5">
            <q-input
              v-model="userName"
              class="q-my-md"
              label="Nombre"
              outlined
              dense
              :rules="inputRules"
              lazy-rules
              ref="userNameInput"
            />
            <q-input
              v-model="userMaternal"
              class="q-my-md"
              label="Ap. Materno"
              outlined
              dense
              :rules="inputRules"
              lazy-rules
              ref="userMaternalInput"
            />
            <q-input
              v-model="userDocument"
              class="q-my-md"
              label="Número DNI"
              outlined
              dense
              :rules="documentRules"
              lazy-rules
              ref="userDocumentInput"
            />
            <q-input
              type="password"
              class="q-my-md"
              label="Repetir contraseña"
              outlined
              dense
              v-model="userRepeatPassword"
              :rules="repeatPasswordRules"
              lazy-rules
              reactive-rules
              ref="userRepeatPasswordInput"
            />
          </div>
        </div>
        <div v-if="invalidRegister" class="text-center text-negative">
          Registro inválido
        </div>
      </q-card-section>
      <q-card-actions align="around" class="text-primary">
        <q-btn label="Registrarse" @click="registerUser()" />
      </q-card-actions>
      <q-card-section>
        <div class="text-center">Ya tienes cuenta? Click aquí</div>
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
      userName: "",
      userPaternal: "",
      userMaternal: "",
      userDocument: "",
      userPassword: "",
      userRepeatPassword: "",
      userNumber: "",
      invalidRegister: false,
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
      repeatPasswordRules: [
        (val) => !!val || "Debe repetir la contraseña",
        (val) =>
          val.length >= 7 || "La contraseña debe tener más de 6 carácteres",
        (val) => val == this.userPassword || "Las contraseñas deben coincidir",
      ],
      inputRules: [(val) => !!val || "Debe ingresar este campo"],
      numberRules: [
        (val) => !!val || "Debe ingresar su número celular",
        (val) => val.length == 9 || "Los números celulares tienen 9 carácteres",
      ],
      documentRules: [
        (val) => !!val || "Debe ingresar su DNI",
        (val) => val.length == 8 || "Los DNI tienen 8 carácteres",
      ],
    };
  },
  props: ["showModal"],
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    async registerUser() {
      if (
        this.$refs.userEmailInput.validate() &&
        this.$refs.userNameInput.validate() &&
        this.$refs.userPaternalInput.validate() &&
        this.$refs.userMaternalInput.validate() &&
        this.$refs.userNumberInput.validate() &&
        this.$refs.userDocumentInput.validate() &&
        this.$refs.userPasswordInput.validate() &&
        this.$refs.userRepeatPasswordInput.validate()
      ) {
        try {
          await this.register({
            email: this.userEmail,
            password: this.userPassword,
            name: this.userName,
            paternal_surname: this.userPaternal,
            maternal_surname: this.userMaternal,
            document: this.userDocument,
            number: this.userNumber,
          });
          setTimeout(() => {
            this.$emit("closeModal");
          }, 1000);
        } catch (error) {
          this.invalidRegister = true;

          setTimeout(() => {
            this.invalidRegister = false;
            this.userEmail = "";
            this.userPassword = "";
            this.userName = "";
            this.userPaternal = "";
            this.userMaternal = "";
            this.userDocument = "";
            this.userNumber = "";
          }, 2000);
        }
      }
    },
    ...mapActions(useUserStore, ["register"]),
  },
};
</script>

<style>
</style>