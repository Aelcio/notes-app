<template>
  <div >
    <div class="row">
      <div class="col-md-9">       
        <p class="paragrafo">Informe os dados abaixo para se cadastrar</p>
        <b-form @submit.prevent="salvar">
          <b-form-group>
            <b-form-input v-model="nome" type="text" placeholder="Nome" required></b-form-input>
          </b-form-group>

          <b-form-group>
            <b-form-input v-model="email" type="email" placeholder="Email" required></b-form-input>
          </b-form-group>
          <b-form-group>
            <b-form-input v-model="senha" type="password" placeholder="Senha"></b-form-input>
          </b-form-group>
          
            
              <b-button block type="submit" variant="dark">Salvar</b-button>
            
          
        </b-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "telausuario",
  head:{
    title: "Registro - Notes App"
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
  
  color: rgb(9, 138, 138);
}
.paragrafo {
  
  color: rgb(9, 138, 138);
}
</style>
