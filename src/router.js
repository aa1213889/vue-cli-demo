
import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router


//组件模块
import HelloWorld from './components/HelloWorld'


Vue.use(Router) //使用vue-router

export default new Router({
    routes: [
        { path: '/sb',  name: 'HelloWorld', component: HelloWorld}
      ]
})