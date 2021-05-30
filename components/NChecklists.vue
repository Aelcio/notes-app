<template>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <b-form-checkbox value="1" unchecked-value="0" class="mr-n2" size="lg" v-model="concluida"/>
    </b-input-group-prepend>
    <b-form-input
      class="bg-warning border-0 text-dark"
      v-model="descricao"
      placeholder="Novo Item"
    ></b-form-input>
  </b-input-group>
</template>

<script>
export default {
    name: "n-checklist",
    props: {
      concluida:{
        type: Number,
        default: 0,
        required: true
      },
      descricao: {
        type: String,
        default: null,
        required: true
      }

    }
};
</script>

<style scoped>
.input-group-text {
  background-color: #ffc107;
  border-color: #ffc107;
}

.custom-control-input:checked ~ .custom-control-label::before {
  border-color: #343a40;
  background-color: #343a40;
}
</style>