/*
 * @Author: xuhua
 * @Date: 2022-11-18 15:54:25
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 14:40:53
 * @FilePath: /vite-vue3-ts-pinia/src/store/modules/user.ts
 * @Description:
 */
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
	id: 'user',
	state: () => {
		return {
			name: 'John',
		}
	},
	getters: {
		helloName: (state) => state.name + ',你好',
	},
	actions: {
		setName(name: string) {
			this.name = name
		},
	},
})
