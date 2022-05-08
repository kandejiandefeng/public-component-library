import { App, Plugin } from 'vue';
import BouncedSelect from './src/index.vue';

export const BouncedSelectPlugin: Plugin = {
  install(app: App) {
    app.component('zs-bounced-select', BouncedSelect);
  },
};

export {
  BouncedSelect,
};
