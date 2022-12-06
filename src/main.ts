/*
 * @Author: xuhua
 * @Date: 2022-11-17 16:34:48
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-06 14:38:13
 * @FilePath: /vite-vue3-ts-pinia/src/main.ts
 * @Description:
 */
import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
