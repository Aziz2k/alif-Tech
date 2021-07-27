import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import bootstrapJS from 'bootstrap/dist/js/bootstrap.bundle'
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  bootstrap,
  bootstrapJS,
  render: h => h(App)
}).$mount('#app')
