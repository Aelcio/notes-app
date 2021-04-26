<template>	
  <div class="container">
 <p v-if="$fetchState.pending" class="text-center">Carregando...</p>
 <p v-else-if="$fetchState.error" class="text-center">Ocorreu um erro :(</p>
    <div v-else class="row">
      <div v-for="nota of notas" :key="nota.id" class="col-md-3">
        <div class="card bg-warning my-3">
          <div class="card-body">
            <h5 class="card-title">{{ nota.titulo }}</h5>
            <p v-if="nota.descricao" class="card-text">
              {{ nota.descricao }} 
            </p>
          </div>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      notas: []
    }
  },
  async fetch() {
    const { data } = await this.$axios.get('notas/usuario/2');
    this.notas = data;
  }
}
</script>

<style>
  .card {
    min-height: 15rem;
    border-radius: 10px;    
  }
</style>
  