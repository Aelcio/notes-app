<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-9">
        <h1 class="titulo">Cadastro Usuario</h1>
        <p class="paragrafo">Informe os dados abaixo</p>

        <b-form @submit.prevent="salvar">
          <b-form-group label-align="right" label-cols="2" label="Nome">
            <b-form-input v-model="nome" type="text" required></b-form-input>
          </b-form-group>

          <b-form-group label-align="right" label-cols="2" label="Email">
            <b-form-input v-model="email" type="email" required></b-form-input>
          </b-form-group>
          <b-form-group label-align="right" label-cols="2" label="Senha">
            <b-form-input v-model="senha" type="password"></b-form-input>
          </b-form-group>
          <div class="row">
            <div class="col-md-10 offset-md-2">
              <b-button block type="submit" variant="dark">Salvar</b-button>
            </div>
          </div>
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
      nome: null,
      email: null,
      senha: null,
    };
  },
  computed: {
    usuario() {
      return this.$store.state.auth.user;
    },
  },
  methods: {
    async salvar() {
      try {
        let data = {
          nome: this.nome,
          email: this.email,
        };

        if (this.senha) {
          data = { ...data, senha: this.senha };
        }
        const usuarioSalvo = await this.$axios.post(`registro`, data);

        // await this.auth.setUser(usuarioSalvo.data);

        this.$router.push("/login");
      } catch (e) {
        console.log(e);
      }
    },
  },
  // mounted() {
  //   this.nome = this.usuario.nome;
  //   this.email = this.usuario.email;
  // },
};
</script>

<style>
.titulo {
  margin-left: 102px;
  color: rgb(9, 138, 138);
}
.paragrafo {
  margin-left: 102px;
  color: rgb(9, 138, 138);
}
</style>
