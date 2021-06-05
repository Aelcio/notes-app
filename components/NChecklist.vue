<template>
    <div>
      <ul class="list-unstyled">
          <li v-for="(item, index) of value" :key="index">
              <n-checklist-item v-model="value[index]"></n-checklist-item>
          </li>    
            <li>
                <!-- <n-checklist-item
                    v-model="checklist"
                    @changeItem="adicionar()"
                ><n-checklist-item> -->
            </li>
        </ul>
    </div>    
</template>

<script>
export default {
  name: "n-checklist",
  props: {
    value: Array,
  },
  data() {
    return {
      checklist: {
        descricao: null,
        concluida: 0,
      }
    }
  }
};
</script>

<style>
</style>