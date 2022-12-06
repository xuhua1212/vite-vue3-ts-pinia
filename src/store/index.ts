/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-06 15:21:27
 * @FilePath: /vite-vue3-ts-pinia/src/store/index.ts
 * @Description:
 */
import { createPinia, defineStore } from 'pinia'

// pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const Store = defineStore('globalState', {
	persist: {
		key: 'globalState',
		storage: window.localStorage,
	},
})

const store = createPinia()
export default store
