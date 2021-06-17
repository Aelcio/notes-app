<template>
  <n-nota :id="$route.params.id"></n-nota>
</template>

<script>
import NNota from "~/components/NNota.vue";
export default {
  components: { NNota },
  layout: "home",

  computed: {
    notas() {
      return this.$store.state.nota.list;
    },
  },
};
</script>

<style>
</style>