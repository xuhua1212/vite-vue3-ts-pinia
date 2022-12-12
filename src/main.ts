/*
 * @Author: xuhua
 * @Date: 2022-11-17 16:34:48
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 16:56:14
 * @FilePath: /vite-vue3-ts-pinia/src/main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './permission'
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
