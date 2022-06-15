import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'create',
      component: () => import('@/views/create/index.vue'),
      meta: {
        pageTitle: 'Create',
      },
    }
  ],
})

export default router
