import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false;

// 自定义组件
import gComponents from './components/index';
console.log(gComponents);
Vue.use(gComponents);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
