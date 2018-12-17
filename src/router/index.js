import Vue from 'vue'
import Router from 'vue-router'
//路由按需加载，减少首页加载时间
import HelloWorld from '@/views/HelloWorld';
import myView from '@/views/myView';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/myView',
      name: 'myView',
      component: myView
    }
  ]
})
