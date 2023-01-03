/*
 * @Author: xuhua
 * @Date: 2022-12-14 10:46:38
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-14 10:48:32
 * @FilePath: /vite-vue3-ts-pinia/src/store/modules/app.ts
 * @Description:
 */
import { defineStore } from 'pinia'

export const useAppStore = defineStore({
	id: 'app',
	state: () => {
		return {
			sidebar: {
				opened: true,
			},
		}
	},
	actions: {
		toggleSidebar() {
			this.sidebar.opened = !this.sidebar.opened
		},
	},
})
