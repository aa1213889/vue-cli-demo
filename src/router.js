
import Vue from 'vue'
import Router from 'vue-router' // 引入vue-router


//组件模块
import HelloWorld from './components/HelloWorld';
import HomePage from './components/homepage/HomePage';
import InputPage from './components/form/input/InputPage';
import SelectPage from './components/form/select/SelectPage';
import RadioPage from './components/form/radio/RadioPage';
import SwitchPage from './components/form/switch/SwitchPage';
import MessagePage from './components/notice/message/MessagePage';
Vue.use(Router) //使用vue-router
export default new Router({
  routes: [
    { path: '/sb', name: 'HelloWorld', component: HelloWorld },
    { path: '/homepage', name: 'HomePage', component: HomePage },
    { path: '/input', name: 'InputPage', component: InputPage },
    { path: '/select', name: 'SelectPage', component: SelectPage },
    { path: '/radio', name: 'RadioPage', component: RadioPage },
    { path: '/switch', name: 'SwitchPage', component: SwitchPage },
    { path: '/message', name: 'MessagePage', component: MessagePage },
  ],
  mode: 'history',  //去掉连接#号
  linkActiveClass: 'active_row',
  // linkExactActiveClass: 'active_row',
})