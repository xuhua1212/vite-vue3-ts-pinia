import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
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
