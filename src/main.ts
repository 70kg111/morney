import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {tagListModel} from '@/models/tagListModel';


Vue.config.productionTip = false;

//全局引用 Nav 组件
Vue.component('Nav', Nav);

//全局引用 Layout 组件
Vue.component('Layout', Layout);

//全局引用 Icon 组件
Vue.component('Icon', Icon);

//把数据放在这里让 Money.vue 和 Labels.vue 去读，那么两边都是读取的同一个对象
window.tagList = tagListModel.fetch();

new Vue({
  //直接去引用整个 router 目录
  router,
  store,
  render: h => h(App)
}).$mount('#app');
