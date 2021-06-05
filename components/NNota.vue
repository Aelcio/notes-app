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
              <n-checklists
                :concluida="nota.checklists[index]['concluida']"
                :descricao="nota.checklists[index]['descricao']"
              ></n-checklists>
            </b-input-group>
          </li>
          <li>
            <n-checklists
              :concluida="checklist.concluida"
              :descricao="checklist.descricao"
            ></n-checklists>
          </li>
        </ul>
        <b-input-group>
          <b-form-tags
            class="bg-warning border=0 text dark"
            input-id="tags-basic"
            v-model="nota.tags"
          ></b-form-tags>
        </b-input-group>

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
  name: "n-nota",
  props: {
    id: Number
  },
  data() {
    return {
      nota: {
        titulo: null,
        descricao: null,
        checklists: [
          {
            descricao: "Teste 1",
            concluida: 1,
          },
        ],
        //tags: ["Tag 1", "Tag 2"],
      },
      checklist: {
        descricao: "Test Check",
        concluida: 0,
      },
    };
  },
  computed: {
    notas() {
      return this.$store.state.nota.list;
    }
  },
 
  methods: {
    async adicionar() {
      const notaSaved = await this.$store.dispatch("nota/add", this.nota);
      this.$router.push(`/nota/edit/${notaSaved.id}`);
    },

    async carregar() {
      const { data } = await this.$axios.get(`notas/${this.id}`);

      this.nota = data;
      //this.nota = this.$store.state.nota.list.find(nota => nota.id == this.id);
    }
  },

  async mounted () {
    if(this.id) {
      await this.carregar();
    }    
  }
};
</script>

<style>
.titulo {
  font-weight: 600;
}
</style>