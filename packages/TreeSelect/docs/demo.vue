<template>
  <div>
    <zs-tree-select :value="selectValue" :tree="tree" />
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";

const selectValue = ref('');
const tree = reactive([{
    children: [],
    id: 'ads',
    label: 'sagudy'
}])
</script>