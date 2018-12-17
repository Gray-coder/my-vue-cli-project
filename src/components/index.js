const version = "0.1.0";
const components = {
  'myButton': require('./myButton/'),
  'myInput': require('./myInput/')
};
const install = function (Vue,config={}) {
  // 注入所有导入组件
  Object.keys(components).forEach(key => {
    //注册全局组件
    Vue.component(key, components[key]);
  });
};

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  version,
  install,
  components
};
