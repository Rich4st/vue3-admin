import { createRouter, createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress';

// 布局组件
import Layout from '@/layout/Layout.vue';

/* 
  公开路由表
*/
const publicRoutes = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/home',
    redirect: '/analysis',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/analysis',
        name: '分析页',
        meta: { enTitle: 'analysis' },
        component: () => import('@/views/dashboard/analysis/index.vue'),
      },
      {
        path: '/workBench',
        name: '工作台',
        meta: { enTitle: 'workBench' },
        component: () => import('@/views/dashboard/workBench/index.vue'),
      },
      {
        path: '/profile',
        name: '个人中心',
        meta: { enTitle: 'profile' },
        component: () => import('@/views/profile/index.vue'),
      },
      {
        path: '/editProfile',
        name: '个人设置',
        meta: { enTitle: 'edit-profile' },
        component: () => import('@/views/profile/editProfile/index.vue'),
      },
      {
        path: '/403',
        name: '403',
        meta: { enTitle: '403' },
        component: () => import('@/views/error-page/403.vue'),
      },
      {
        path: '/404',
        name: '404',
        meta: { enTitle: '404' },
        component: () => import('@/views/error-page/404.vue'),
      },
      {
        path: '/404',
        name: '404',
        meta: { enTitle: '404' },
        component: () => import('@/views/error-page/404.vue'),
      },
      {
        path: '/500',
        name: '500',
        meta: { enTitle: '500' },
        component: () => import('@/views/error-page/500.vue'),
      },
      {
        path: '/empty',
        name: '空状态',
        meta: { enTitle: 'empty' },
        component: () => import('@/views/error-page/empty.vue'),
      },
      {
        path: '/success',
        name: '成功页',
        meta: { enTitle: 'success' },
        component: () => import('@/views/result-page/success.vue'),
      },
      {
        path: '/failure',
        name: '失败页',
        meta: { enTitle: 'failure' },
        component: () => import('@/views/result-page/failure.vue'),
      },
      {
        path: '/basicForm',
        name: '基础表单',
        meta: { enTitle: 'BasicForm' },
        component: () => import('@/views/form-page/basicForm/index.vue'),
      },
      {
        path: '/stepForm',
        name: '分步表单',
        meta: { enTitle: 'StepForm' },
        component: () => import('@/views/form-page/stepForm/index.vue'),
      },
      {
        path: '/advancedForm',
        name: '高级表单',
        meta: { enTitle: 'AdvancedForm' },
        component: () => import('@/views/form-page/advancedForm/index.vue'),
      },
      {
        path: '/accountManager',
        name: '账号管理',
        meta: { enTitle: 'AccountManager' },
        component: () => import('@/views/sys/account/index.vue'),
      },
      {
        path: '/roleManager',
        name: '角色管理',
        meta: { enTitle: 'RoleManager' },
        component: () => import('@/views/sys/role/index.vue'),
      },
      {
        path: '/deptManager',
        name: '部门管理',
        meta: { enTitle: 'DeptManager' },
        component: () => import('@/views/sys/department/index.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // 配置路由表
  routes: publicRoutes,
});

// 配置路由守卫
router.beforeEach((to, from) => {
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
