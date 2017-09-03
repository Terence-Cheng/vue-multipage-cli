
import List from './component/list.vue'
import Table from './component/table.vue'

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
//   mode: 'history',
   routes:[
    {
      path: '/',
      redirect: '/grid/list'
    },
    {
      path: '/grid/list',
      component: List,
      name: 'list'
    },
    {
      path: '/table',
      component: Table,
      name: 'table'
    },
  ]
});

export default router;
