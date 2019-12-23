
import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router


//组件模块
import HelloWorld from './components/HelloWorld';
import InputPage from './components/input/InputPage';
import SelectPage from './components/select/SelectPage';


Vue.use(Router) //使用vue-router

export default new Router({
  routes: [
    { path: '/sb', name: 'HelloWorld', component: HelloWorld },
    { path: '/input', name: 'InputPage', component: InputPage },
    { path: '/select', name: 'SelectPage', component: SelectPage },
  ],
  mode:'history',  //去掉连接#号
  linkActiveClass: 'active_row',
  linkExactActiveClass: 'active_row',
})