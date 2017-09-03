// import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueRouter from 'vue-router'
import store from './store/store.js'
import Vuex from 'vuex'

import router from './router'
import Mock from '../../mock'

import 'font-awesome/css/font-awesome.min.css'

/* global IS_DEV:true */ // 由于ESLint会检测没有定义的变量，因此需要这一个`global`注释声明IS_DEV是一个全局变量(当然在本例中并不是)来规避warning
if (IS_DEV) {
  Mock.bootstrap();
  console.log('如果你看到这个Log，那么这个版本实际上是开发用的版本,需要mock数据, dev');
} else {
  console.log('如果你看到这个Log，那么这个版本实际上是不是开发用的版本,不需要mock数据, not dev');
}

Vue.use(ElementUI)
// Vue.use(VueRouter)
Vue.use(Vuex)

//NProgress.configure({ showSpinner: false });

/*const router = new VueRouter({
 routesPhone
 })*/

//routerP.afterEach(transition => {
//NProgress.done();
//});

const app1 = new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    store,
    //components: { App }
    render: h => h(App)
}).$mount('#test')

