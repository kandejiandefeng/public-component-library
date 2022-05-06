import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { FooPlugin } from './Foo';

const MyKitPlugin: Plugin = {
    install(app: App) {
        ButtonPlugin.install?.(app);
        FooPlugin.install?.(app);
    },
};

export default MyKitPlugin;

export * from './Button';
export * from './Foo';