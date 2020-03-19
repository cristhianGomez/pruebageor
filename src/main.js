import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbvue/lib/css/mdb.min.css'
import Vue from 'vue'
import App from './App.vue'

import * as mdbvue from 'mdbvue'
import vuetify from './plugins/vuetify';
import router from './router'
import store from './store'
for (const component in mdbvue) {
  Vue.component(component, mdbvue[component])
}

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
