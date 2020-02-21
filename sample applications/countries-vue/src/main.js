import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// bootstrap stuff
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
  render: h => h(App),
}).$mount('#app');
