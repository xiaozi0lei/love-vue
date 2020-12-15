import ElementUI from 'element-ui' //新添加
import 'element-ui/lib/theme-chalk/index.css' //新添加，避免后期打包样式不同，要放在import App from './App';之前
import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
//配置全局api
import server from './config/server.js'    //先引入文件
Vue.prototype.SERVER=server;   //将引入的文件挂载到vue的原型中
Vue.use(ElementUI)   //新添加
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
