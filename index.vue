<template>
  <n-nota :id="$route.params.id"></n-nota>
</template>

<script>
import NNota from '~/components/NNota.vue';
export default {
  //components: { NNota },
  layout: "home",  
};
</script>

<style>
</style>