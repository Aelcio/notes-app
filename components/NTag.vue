<template>
  <b-input-group>
    <b-form-tags  
      class="bg-warning border-0 text-dark"
      tag-variant="dark"
      placeholder="Adicione tags"
      v-model="value.nome"
      ></b-form-tags>
  </b-input-group>
</template>

<script>
export default {
  name: "n-tag",
  props: {
    value: Array,
  },
  data() {
    return {
      tag: {
        nome: null,
        
      },
    };
    console.log(this.value)
  },
  methods: {
    adicionar() {
      this.value.push(this.tag);
      this.tag = {
        nome: null,
      };
    },
  },
};
</script>

<style>
</style>