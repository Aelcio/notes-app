<template>
  <div>
    <h1 class="my-5">Editar Perfil</h1>
    <b-card class="p-5">
      <div class="row">
        <div class="col-md-3">
          <b-img
            center
            rounded="circle"
            src="https://picsum.photos/125/125/?image=1"
            alt="Avatar do Usuário"
          />
          <h5 class="mt-5 text-center">{{ usuario.nome }}</h5>
        </div>

        <div class="col-md-9">
          <b-form @submit.prevent="salvar">
            <b-form-group label-align="right" label-cols="2" label="Nome">
              <b-form-input v-model="nome" type="text" required></b-form-input>
            </b-form-group>

            <b-form-group label-align="right" label-cols="2" label="Email">
              <b-form-input
                v-model="email"
                type="email"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group label-align="right" label-cols="2" label="Nova Senha">
              <b-form-input v-model="senha" type="password"></b-form-input>
            </b-form-group>
            <div class="row">
              <div class="col-md-10 offset-md-2">
                <b-button type="submit" variant="primary"
                  >Salvar Perfil</b-button
                >
              </div>
            </div>
          </b-form>
        </div>
      </div>
    </b-card>
  </div>
</template>

<script>
export default {
  layout: "home",
  transitions:'fade',
  head:{
    title: "Perfil - Notes App"
  },
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
        const usuarioSalvo = await this.$axios.put(`usuario`,data);

        await this.auth.setUser(usuarioSalvo.data);

        this.$router.push("/");
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.nome = this.usuario.nome;
    this.email = this.usuario.email;
  },
};
</script>

<style>
</style>