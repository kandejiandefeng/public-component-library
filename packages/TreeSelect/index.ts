import { App, Plugin } from 'vue';
import TreeSelect from './src/index.vue';

export const TreeSelectPlugin: Plugin = {
  install(app: App) {
    app.component('zs-tree-select', TreeSelect);
  },
};

export {
  TreeSelect,
};
