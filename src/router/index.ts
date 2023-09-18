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
    }, {
      path: '/login',
      component: () => import('@/views/Login/index.vue'),
      meta: { title: '登录' }
    }, {
      path: '/personal',
      component: () => import('@/views/User/PerSonal.vue'),
      meta: { title: '个人资料' }
    }, {
      path: '/order',
      component: () => import('@/views/User/OrderList.vue'),
      meta: { title: '我的订单' }
    }, {
      path: '/balance',
      component: () => import('@/views/User/MyBalance.vue'),
      meta: { title: '我的余额' }
    }, {
      path: '/study',
      component: () => import('@/views/User/MyStudy.vue'),
      meta: { title: '我的学习' }
    }, {
      path: '/setting',
      component: () => import('@/views/User/MySetting.vue'),
      meta: { title: '设置' }
    }, {
      path: '/feedback',
      component: () => import('@/views/User/FeedBack.vue'),
      meta: { title: '意见反馈' }
    }, {
      path: '/we',
      component: () => import('@/views/User/AboutWe.vue'),
      meta: { title: '关于梦学谷' }
    }, {
      path: '/quizdetail',
      component: () => import('@/views/Quiz/QuizDetail.vue'),
      meta: { title: '问答详情' }
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title as string
})

export default router
