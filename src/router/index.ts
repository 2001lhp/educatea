import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/Layout/index.vue'),
      redirect: '/home',
      children: [{
        path: '/home',
        component: () => import('@/views/Home/index.vue'),
        meta: { title: '首页' }
      }, {
        path: '/cate',
        component: () => import('@/views/Cate/index.vue'),
        meta: { title: '分类' }
      }, {
        path: '/read',
        component: () => import('@/views/Read/index.vue'),
        meta: { title: '阅读' }
      }, {
        path: '/quiz',
        component: () => import('@/views/Quiz/index.vue'),
        meta: { title: '问答' }
      }, {
        path: '/user',
        component: () => import('@/views/User/index.vue'),
        meta: { title: '我的' }
      },]
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title as string
})

export default router
