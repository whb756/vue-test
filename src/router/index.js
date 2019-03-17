import Vue from 'vue'
import Router from 'vue-router'
//  

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/pages/home')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/pages/about')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/pages/contact')
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/pages/product')
    },
    {
      path: '/join',
      name: 'join',
      component: () => import('@/pages/join')
    },
    {
      path: '/experience',
      name: 'experience',
      component: () => import('@/pages/experience')
    },
    {
      path: '/case',
      name: 'case',
      component: () => import('@/pages/case')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/pages/news')
    }
  ]
})
