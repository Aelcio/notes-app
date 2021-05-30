<template>
  <div class="card bg-warning my-5">
    <div class="card-body">
      <b-form @submit.prevent="adicionar">
        <b-form-group>
          <b-form-input
            class="bg-warning border-0 titulo text-dark"
            v-model="nota.titulo"
            type="text"
            placeholder="Título"
          ></b-form-input>
        </b-form-group>
        <b-form-group>
          <b-form-textarea
            class="bg-warning border-0 text-dark"
            v-model="nota.descricao"
            type="text"
            placeholder="Descrição"
            :required="true"
            rows="10"
            size="lg"
            :autofocus="true"
          ></b-form-textarea>
        </b-form-group>

        <ul class="list-unstyled">
          <li v-for="(item, index) of nota.checklists" :key="index">
             <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-form-checkbox class="mr-n2" 
                v-model="nota.checklist[index]['concluida']" />
              </b-input-group-prepend>
              <b-form-input
                class="bg-warning border-0 text-dark"
              v-model="nota.checklists[index]['descricao']"
              ></b-form-input>
            </b-input-group>
          </li>
          <li>
            <b-input-group class="mb-2">
              <b-input-group-prepend is-text>
                <b-form-checkbox class="mr-n2" v-model="checklist.concluida" />
              </b-input-group-prepend>
              <b-form-input
                class="bg-warning border-0 text-dark"
                v-model="checklist.descricao"
                placeholder="Novo Item"
              ></b-form-input>
            </b-input-group>
          </li>
        </ul>

        <b-button type="button" variant="warning">
          <b-icon icon="check2-square" />
        </b-button>
        <b-button type="button" variant="warning">
          <b-icon icon="tag" />
        </b-button>
        <b-button type="submit" variant="dark"> Adicionar </b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
  data() {
    return {
      nota: {
        titulo: null,
        descricao: null,
        checklists: [],
        tags: [],
      },
      checklist: {
        descricao: null,
        concluida: false,
      },
    };
  },
  methods: {
    async adicionar() {
      this.$store.dispatch("nota/add", this.nota);
    },
  },
};
</script>

<style>
.titulo {
  font-weight: 600;
}
.input-group-text {
  background-color: #ffc107;
  border-color: #ffc107;
}

</style>