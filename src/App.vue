<template>
  <div class="my-kit-doc">
    <aside>
        <div v-for="(link, index) in data.links" :key="index">
            <router-link :to="link.path">{{ link.name }}</router-link>
        </div>
    </aside>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script lang="ts" setup>
import ComponentList from '../packages/list.json';
import { reactive } from 'vue';

// 获取packages中的组件列表
const data = reactive({
  links: ComponentList.map(item => ({
    path: `/components/${item.compName}`,
    name: item.compZhName
  }))
})
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
.my-kit-doc {
  display: flex;
  min-height: 100vh;
  aside {
    width: 200px;
    padding: 15px;
    border-right: 1px solid #ccc;
  }
  main {
    width: 100%;
    flex: 1;
    padding: 15px;
  }
}
</style>