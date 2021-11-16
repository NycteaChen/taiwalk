import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import './assets/css/tailwind.css'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import VueGoogleMaps from '@fawmi/vue-google-maps'
import { key } from '../src/assets/js/api/config'

// 換 router 時，scroll 回到最上方
router.afterEach(() => {
  window.scrollTo(0, 0)
})

createApp(App)
  .use(router)
  .use(Antd)
  .use(VueGoogleMaps, {
    load: {
      key: key,
    },
  })
  .mount('#app')
