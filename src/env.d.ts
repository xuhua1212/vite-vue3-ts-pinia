/*
 * @Author: xuhua
 * @Date: 2022-12-12 15:15:05
 * @LastEditors: xuhua
 * @LastEditTime: 2022-12-12 15:15:07
 * @FilePath: /vite-vue3-ts-pinia/env.d.ts
 * @Description:
 */
/// <reference types="vite/client" />

declare module '*.vue' {
	import { DefineComponent } from 'vue'
	// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
	const component: DefineComponent<{}, {}, any>
	export default component
}
