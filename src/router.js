
import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router


//组件模块
import HelloWorld from './components/HelloWorld';
import InputPage from './components/form/input/InputPage';
import SelectPage from './components/form/select/SelectPage';
import RadioPage from './components/form/radio/RadioPage';
import SwitchPage from './components/form/switch/SwitchPage';
Vue.use(Router) //使用vue-router

export default new Router({
  routes: [
    { path: '/sb', name: 'HelloWorld', component: HelloWorld },
    { path: '/input', name: 'InputPage', component: InputPage },
    { path: '/select', name: 'SelectPage', component: SelectPage },
    { path: '/radio', name: 'RadioPage', component: RadioPage },
    { path: '/switch', name: 'SwitchPage', component: SwitchPage },
  ],
  mode: 'history',  //去掉连接#号
  linkActiveClass: 'active_row',
  // linkExactActiveClass: 'active_row',
})