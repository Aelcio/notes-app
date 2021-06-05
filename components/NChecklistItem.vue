<template>
  <b-input-group class="mb-2">
    <b-input-group-prepend is-text>
      <b-form-checkbox 
      :value="1" 
      :unchecked-value="0" 
      class="mr-n2" 
      size="lg" 
      v-model="concluida"/>
    </b-input-group-prepend>
    <b-form-input
      class="bg-warning border-0 text-dark"
      :class="{'concluida': concluida == 1}"
      placeholder="Novo Item" 
      v-model="descricao"
      @keyup.enter.prevent="change"
      ></b-form-input>
  </b-input-group>
</template>

<script>
export default {
    name: "n-checklist-item",
    props: {
      concluida:{
        type: Number,
        default: 0,
        required: true, validator: function (value){
          return[0, 1].indexOf(value) !== -1
        }
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
.concluida {
  text-decoration: line-through;
}
</style>