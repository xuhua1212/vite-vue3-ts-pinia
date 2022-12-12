/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 14:34:41
 * @FilePath: /vite-vue3-ts-pinia/src/store/index.ts
 * @Description:
 */
import { createPinia } from 'pinia'

// pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const store = createPinia()

store.use(piniaPluginPersistedstate)

export default store
