<template>
  
</template>

<script>
import notesChecklists from "~/components/NChecklists.vue";

export default {
  layout: "home",
  data() {
    return {
      nota: {
        titulo: null,
        descricao: null,
        checklists: [
          {
            descricao: "Teste 1",
            concluida: true,
          },
        ],
        tags: ["Tag 1", "Tag 2"],
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

</style>