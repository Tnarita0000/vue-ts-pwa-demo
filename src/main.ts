import { Vue, Component } from 'vue-property-decorator'
import App from '../src/App.vue'
import router from './router'

Vue.config.productionTip = false

@Component({
  components: { App }
})
class Root extends Vue {
}

new Root({
  el: '#app',
  router,
  template: '<App/>'
});

