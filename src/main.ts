import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav/index'
import Pagination from '@/components/Pagination/index'
// 引入mockServe.js
import '@/mock/mockServe.js'
import "swiper/swiper-bundle.min.css"
import mitt from 'mitt'
import * as API from '@/api'
import 'element-plus/theme-chalk/el-message.css'
import 'element-plus/dist/index.css'
import VueLazyload from 'vue3-lazyload';

const emitter = mitt()

const app = createApp(App)

// 全局注册mitt
app.config.globalProperties.emitter = emitter

// 全局注册方法，globalProperties 替代 proptotype
app.config.globalProperties.$API = API

// 懒加载
app.use(VueLazyload, {
  // 图片加载时的默认图片
  loading: require('./assets/images/loading.png'),
  // 图片加载出错时的图片
  error: require('./assets/images/error.png')
})


// 全局组件
app.use(TypeNav).use(Pagination)

app.use(store).use(router).mount('#app')
