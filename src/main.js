import Vue from 'vue'
import App from './App.vue'
import './plugins/axios'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import './plugins/toasted'
import './plugins/apexchart'

Vue.config.productionTip = false

import './filtros'

new Vue({  
  router,
  render: h => h(App)
}).$mount('#app')
