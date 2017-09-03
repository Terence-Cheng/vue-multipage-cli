// import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './Test.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// import VueRouter from 'vue-router'
import store from './store/store.js'
import Vuex from 'vuex'

import router from './router'
import Mock from '../../mock'
Mock.bootstrap();
import 'font-awesome/css/font-awesome.min.css'

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
console.log('xxsssaadfsfssssssf')
const app1 = new Vue({
    //el: '#app',
    //template: '<App/>',
    router,
    store,
    //components: { App }
    render: h => h(App)
}).$mount('#test')

