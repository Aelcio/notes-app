<template>
  <div>
    <b-navbar type="dark" variant="dark">
      <b-navbar-brand to="/">Notes App</b-navbar-brand>
      <b-navbar-toggle target="notesBar"></b-navbar-toggle>

      <b-collapse id="notesBar" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown id="1" :text="primeiroNome" right>
            <b-dropdown-item to="perfil">Perfil</b-dropdown-item>
            <b-dropdown-item to="#" @click.prevent="logout"
              >Sair</b-dropdown-item
            >
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="container">
      <offline-alert v-if="$nuxt.isOffline" />
      <Nuxt />
    </div>
  </div>
</template>
 
<script>
import OfflineAlert from '~/components/OfflineAlert.vue';
export default {
  components: { OfflineAlert },
  head: {
    title: "Home - Notes App",
  },
  computed: {
    usuario() {
      return this.$store.state.auth.user;
    },

    primeiroNome() {
      if (this.usuario) {
        const [nome] = this.usuario.nome.split(" ");

        return nome;
      }
    },
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
  mounted() {
    console.log(this.$nuxt.isOffline);
  },
};
</script>

<style>
</style>