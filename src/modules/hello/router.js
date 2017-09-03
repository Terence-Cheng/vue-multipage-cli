
import List from './component/list.vue'


import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes:[
    {
      path: '/',
      redirect: '/grid/list'
    },
    {
      path: '/grid/list',
      component: List,
      name: 'list'
    }
  ]
});

export default router;
