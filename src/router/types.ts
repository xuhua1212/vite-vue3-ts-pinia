/*
 * @Author: xuhua
 * @Date: 2022-12-12 15:09:42
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 15:44:36
 * @FilePath: /vite-vue3-ts-pinia/src/router/types.ts
 * @Description:
 */
import type { defineComponent } from 'vue'
import type { RouteMeta, NavigationGuard } from 'vue-router'

export type Component<T = any> = ReturnType<typeof defineComponent> | (() => Promise<typeof import('*.vue')>) | (() => Promise<T>)

export interface AppRouteRecordRaw {
	path: string
	name?: string | symbol
	component?: Component | string
	meta?: RouteMeta
	redirect?: string
	children?: AppRouteRecordRaw[]
	alias?: string | string[]
	props?: Record<string, any>
	beforeEnter?: NavigationGuard | NavigationGuard[]
	fullpath?: string
}
