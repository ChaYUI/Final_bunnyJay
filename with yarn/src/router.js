import Vue from 'vue'
import VueRouter from 'vue-router'
// import App from './App.vue'
import test from './test.vue'
import key from './view/Key.vue'
import Camera from './view/Camera.vue'
import laptop from './view/Laptop.vue'
import tripod from './view/tripod.vue'
import pad from './view/pad.vue'
import VR from './view/VR.vue'
import Wacom from './view/Wacom.vue'
import drone from './view/drone.vue'
import Arduino from './view/Arduino'

Vue.use(VueRouter); //挂载属性
//创建路由对象并配置路由规则
export default new VueRouter({
  mode: 'history',
  routes: [
    //一个个对象
    // { path: '/', component: AllApp },
    {
      path: '/',
      component: test,
    },
    {
      path: '/key/',
      component: key,
    },
    {
      path: '/Camera/',
      component: Camera,
    },
    {
      path: '/laptop/',
      component: laptop,
    },
    {
      path: '/tripod/',
      component: tripod,
    },
    {
      path: '/pad/',
      component: pad,
    },
    {
      path: '/VR/',
      component: VR,
    },
    {
      path: '/Wacom/',
      component: Wacom,
    },
    {
      path: '/drone',
      component: drone,
    },
    {
      path: '/Arduino',
      component: Arduino,
    },
    // {
    //   path: '/AccountManagementList',
    //   component: test,
    //   children: [
    //     {
    //       path: 'userinfo',
    //       name:'userinfo',
    //       component: test
    //     },
    //     {
    //       path: 'useradd',
    //       component: test
    //     },
    //     {
    //       path: '/',
    //       component: test
    //     }
    //   ]
    // },
    // {
    //   path: '/',           //這個表示的是根目錄，即一進入的頁面
    //   redirect: 'login',
    //   meta: { requiresAuth: false }, // 不需驗證
    // },
    // {
    //   path: '/*',
    //   redirect: '/login',
    //   meta: { requiresAuth: false }, // 不需驗證
    // }
  ]
});
