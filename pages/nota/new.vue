<template>
  <div class="card bg-warning my-5">
    <div class="card-body">
      <b-form @submit.prevent>
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
            class="bg-warning border-0"
            v-model="nota.descricao"
            type="text"
            placeholder="Descrição"
            rows="10"
          ></b-form-textarea>
        </b-form-group>
      </b-form>

      <b-button type="button" variant="warning">
          <b-icon icon="check2-square"/>
      </b-button>
      <b-button type="button" variant="warning">
          <b-icon icon="tag"/>
      </b-button>
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
    };
  },
};
</script>

<style>
.titulo {
  font-weight: 600;
}
</style>