import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, BIconQuestionOctagon,BIconWrench,BIconQuestion} from 'bootstrap-vue'
import { BootstrapVueIcons } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.component('BIconQuestionOctagon', BIconWrench)
Vue.component('BIconQuestionOctagon', BIconQuestionOctagon)
Vue.component('BIconQuestion', BIconQuestion)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
