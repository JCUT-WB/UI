import Vue from 'vue';
import App from './App.vue';
import '../components/css/demo.scss';
import '../components/css/card.scss';

// use直接注册组件的方法
import '2-1.demo/dist/css/index.css';
import MUI from '2-1.demo';
Vue.use(MUI);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app')