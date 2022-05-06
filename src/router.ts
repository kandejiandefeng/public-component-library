import { createRouter, createWebHashHistory, RouterOptions } from 'vue-router';

const routes = [
    {
        title: '按钮',
        name: 'Button',
        path: '/components/Button',
        component: () => import('packages/Button/docs/README.md'),
    },
    {
        title: '样品',
        name: 'Foo',
        path: '/components/Foo',
        component: () => import('packages/Foo/docs/README.md'),
    },
    {
        title: 'select点击弹表格选择',
        name: 'selectTable',
        path: '/components/selectTable',
        component: () => import('packages/selectTable/docs/README.md'),
    }
];

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