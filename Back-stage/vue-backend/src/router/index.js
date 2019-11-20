import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Pinleiguanli from '../views/Pinleiguanli.vue'
import Shangpinguanli from '../views/Shangpinguanli.vue'
import Yonghuguanli from '../views/Yonghuguanli.vue'
import Quanxianguanli from '../views/Quanxianguanli.vue'
import Dingdanguanli from '../views/Dingdanguanli.vue'
import Shangpinxiangqing from '../views/Shangpinxiangqing.vue'
import Dingdanxiangqing from '../views/Dingdanxiangqing.vue'
import Tianjiashangpin from '../views/Tianjiashangpin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    children:[
      {
        path: 'pinleiguanli',
        name: 'pinleiguanli',
        component: Pinleiguanli
      },
      {
        path: 'dingdanguanli',
        name: 'dingdanguanli',
        component: Dingdanguanli
      },
      {
        path: 'quanxianguanli',
        name: 'quanxianguanli',
        component: Quanxianguanli
      },
      {
        path: 'yonghuguanli',
        name: 'yonghuguanli',
        component: Yonghuguanli
      },
      {
        path: 'shangpinguanli',
        name: 'shangpinguanli',
        component: Shangpinguanli,
      },
      {
        path: 'shangpinxiangqing',
        name: 'shangpinxiangqing',
        component: Shangpinxiangqing
      },
      {
        path: 'dingdanxiangqing',
        name: 'dingdanxiangqing',
        component: Dingdanxiangqing
      },
      {
        path: 'tianjiashangpin',
        name: 'tianjiashangpin',
        component: Tianjiashangpin
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
