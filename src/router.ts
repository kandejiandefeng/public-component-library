/* eslint-disable prettier/prettier */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router'

const routes = [{
    title: '按钮',
    name: 'Button',
    path: '/components/Button',
    component: () => import('packages/Button/docs/README.md'),
}, {
    title: '示例',
    name: 'Foo',
    path: '/components/Foo',
    component: () => import('packages/Foo/docs/README.md'),
}, {
    title: '下拉表格弹框',
    name: 'BouncedSelect',
    path: '/components/BouncedSelect',
    component: () => import('packages/BouncedSelect/docs/README.md'),
}, {
    title: '下拉树',
    name: 'TreeSelect',
    path: '/components/TreeSelect',
    component: () => import('packages/TreeSelect/docs/README.md'),
}];

const routerConfig = {
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to: any, from: any) {
        if (to.path !== from.path) {
            return { top: 0 };
        }
    },
};

const router = createRouter(routerConfig as RouterOptions);

export default router;
