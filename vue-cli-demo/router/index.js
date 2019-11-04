import Vue from 'vue'
import VueRouter from 'vue-router'
import film from './films'
import center from './center'
import index from '../src/components/HelloWorld'
Vue.use(VueRouter) //注册路由模块

export default new VueRouter({
    routes:[
        {
            path:'/',
            component:index
        },
        {
            path:'/film',
            component:film
        },
        {
            path:'/center',
            component:center
        },

    ]
})