import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false

// new Vue({
//         render: h => h(App),
// }).$mount('#app')



new Vue({
        el: '#app',
        //让vue知道我们的路由规则
        router: router, //可以简写router
        render: c => c(App),
})