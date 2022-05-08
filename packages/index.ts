/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { FooPlugin } from './Foo';
import { BouncedSelectPlugin } from './BouncedSelect';
import { TreeSelectPlugin } from './TreeSelect';

const MYKitPlugin: Plugin = {
    install(app: App) {
        ButtonPlugin.install?.(app);
        FooPlugin.install?.(app);
        BouncedSelectPlugin.install?.(app);
        TreeSelectPlugin.install?.(app);
    },
};

export default MYKitPlugin;

export * from './Button'
export * from './Foo'
export * from './BouncedSelect'
export * from './TreeSelect'