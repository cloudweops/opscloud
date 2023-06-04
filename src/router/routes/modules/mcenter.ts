import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const USER: AppRouteRecordRaw = {
    path: '/mcenter/user',
    name: 'mcenter.user',
    // 继承父组件
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.mcenter.user',
        icon: 'icon-user',
        requiresAuth: true,
        order: 0,
    },
    children: [
        {
            path: 'list',
            name: 'mcenter.user.list',
            component: () => import('@/views/mcenter/user/index.vue'),
            meta: {
                locale: 'menu.mcenter.user.list',
                requiresAuth: true,
                roles: ['*'],
            },
        },
    ],
};

export default USER;