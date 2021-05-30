<template>
  <div>
    <div class="row">
      <div class="col-md-9">
       <p class="paragrafo" variant="dark">
          Informe os dados abaixo para acessar
        </p>

        <b-form @submit.prevent="login">
          <b-form-group>
            <b-form-input
              v-model="email"
              type="email"
              placeholder="E-mail"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-input
              v-model="senha"
              type="password"
              placeholder="Senha"
              required
            ></b-form-input>
          </b-form-group>

          <b-button block type="submit" variant="dark">Acessar</b-button>
          <a href="usuario/cadusuario">Cadastre-se</a>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "telausuario",
  data() {
    return {
      email: null,
      senha: null,
    };
  },
  methods: {
    async login() {
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.email,
            senha: this.senha,
          },
        });
        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style>
.noteapp {
  color: rgb(9, 138, 138);
}

.paragrafo {
  color: rgb(9, 138, 138);
}
</style>