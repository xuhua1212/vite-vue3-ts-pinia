/*
 * @Author: xuhua
 * @Date: 2022-12-12 14:01:26
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 15:36:44
 * @FilePath: /vite-vue3-ts-pinia/src/store/modules/setting.ts
 * @Description:
 */
import { defineStore } from 'pinia'
import defaultSetting from '@/config/setting.json'
import type { globalComSizeType } from '@/config/options'

interface SettingState {
	theme: 'light' | 'dark'
	themeColor: string
	globalComSize: globalComSizeType
	header: boolean
	footer: boolean
	menu: boolean
	hideMenu: boolean
	menuWidth: number
	menuCollapse: boolean
	tab: boolean
	tabMode: string
	animate: boolean
	animateMode: string
}

export const useSettingStore = defineStore({
	id: 'setting',
	state: (): SettingState => ({ ...defaultSetting }),
	actions: {
		toggleTheme(dark: boolean) {
			this.theme = dark ? 'dark' : 'light'
			document.body.setAttribute('element-theme', dark ? 'dark' : 'light')
			this.setThemeColor(this.themeColor)
		},
		setThemeColor(color: string) {
			if (!color) return
			this.themeColor = color
		},
	},
})
